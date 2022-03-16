import React, { useState } from "react";
import "./Home.css";
import "./Cave.css";
import styled from "styled-components";
import Text from "./caveText";
import Heading from "./TableHead";
import Inventory from "./Inventory";
import { useNavigate } from "react-router-dom";
import background from "./Images/Cave.jpg";
import witch from "./Images/Witch.png";
import skeleton from "./Images/Skeleton.png";
import goblin from "./Images/Goblin.png";
import dragon from "./Images/Dragon.png";
import {exploreCave, CaveMessages} from "./data";
import {getActiveStats} from "./data";
import {setActiveStats} from "./data";
import {collectItems} from "./data";
import {battleSequence} from "./Combat";
import useSound from 'use-sound';
import mining from "./Images/stones.mp3";

const App = () => {
  const [b, setB] = useState(true)
  const [table, setTable] = useState(getTable());
  const [bool, setBool] = useState(true)
  const [inventoryToggle, setInventory] = useState(false);
  const [ht, setHT]= useState(true);
  const [state, setButton] = useState("Open Inventory")
  const [battle, setBattle] = useState("Start");
  const [stats, setStats] = useState(getStats());
  const [mine] = useSound(mining);

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `../`;
    navigate(path);
    let new_stats = stats;
    new_stats.health = 50;
    setActiveStats(new_stats);
  }
  async function getTable(){
    if(b){
    setB(false);
    let jsonData = await Inventory();
    setTable({this: "re-render"});
    setTable(jsonData);
  }
}

  async function resolvePromise(){
      let jsonData = await exploreCave();
      setBattle(jsonData)
  }

  function collectOre(){
    let inventory = JSON.parse(stats.inventory)
    let count = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Stone Pickaxe") {
        count += 1;
      }
    }
    if (count >= 1){
    setB(true);
    collectItems({item : "Iron", quantity : 1, type : "Crafting Item",description : "metal from iron ore"})
    CaveMessages.unshift("You mined some iron");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  else{
    CaveMessages.unshift("To mine stone, you need a Stone Pickaxe");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
}

  async function getStats(){
    if(bool){
    setBool(false);
    let jsonData = await getActiveStats();
    setStats(jsonData);

  }

  }

  async function updateBattle(player,enemy,action){
    let new_user;
    let new_enemy;
    let usr_text
    let em_text
    let temp;
    temp = await battleSequence(player,enemy,action);
    new_user = temp[0]
    new_enemy = temp[1]
    usr_text = temp[2]
    em_text = temp[3]

    CaveMessages.unshift(usr_text);
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    CaveMessages.unshift(em_text);
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);

    setStats({this: "re-render"})
    setStats(new_user)
    setBattle({this: "re-render"})
    setBattle(new_enemy)
    setActiveStats(new_user)
  }


  function handleClick(e) {
    e.preventDefault();
    if(inventoryToggle){
      setInventory(false)
      setButton("Open Inventory")
    }
    else{
      setInventory(true)
      setButton("Close Inventory")
    }

  }
function page(){
  if (battle === "Start"){
  return (
    <div>
    <Container3>
      <Main> <button onClick={() => resolvePromise()}>Enter the Cave</button> </Main>

      <SideBar><Text /></SideBar>
      <Footer>Player Stats
      <div>User: {stats.username} Health: {stats.health} Attack: {stats.attack} Defense: {stats.defense} Speed: {stats.speed}</div>
      </Footer>
    </Container3>
    </div>
  )
}

  else if (!battle.battle){

    return(
    <div>
    <Container2>
      <Main><button onClick={() => resolvePromise()}>Explore the Cave Further</button> </Main>
      <SideBar>{ht && <Text />}</SideBar>
      <ContentBox >
        <Content1>
          Mining Buttons
          <div class= 'enemy'>
          <button onClick={() => collectOre(battle.ore)}>Collect {battle.ore}</button>
          </div>
        </Content1>
        <Content2>
        Inventory
        <div align ="center">
          {inventoryToggle && <Heading />}
          {inventoryToggle && table}
        <button onClick={handleClick}>{state}</button>
        </div>
        </Content2>
      </ContentBox>
      <Footer>Player Stats
      <div>User: {stats.username} Health: {stats.health} Attack: {stats.attack} Defense: {stats.defense} Speed: {stats.speed}</div></Footer>
    </Container2>
    </div>
  )
  }
  else if (battle.battle){

    let enemy;
    if (battle.monster == "Goblin"){
      enemy = goblin;


    }
    else if (battle.monster == "Dragon"){
      enemy = dragon;

    }
    else if (battle.monster == "Skeleton"){
      enemy = skeleton;

    }
    else if (battle.monster == "Witch"){
      enemy = witch;

    }
    if (stats.health >= 0 && enemy.health <=0){
      return (
        <div>
        <Container>
          <Main>
          <div>
          You Win!
          </div>
          </Main>
          <SideBar><Text /></SideBar>
          <ContentBox>
            <Content1>
              <div>
                <Main><button onClick={() => resolvePromise()}>Explore the Cave Further</button> </Main>
              </div>
            </Content1>
          </ContentBox>
          <Footer>Player Stats
          <div>User: {stats.username} Health: {stats.health} Attack: {stats.attack} Defense: {stats.defense} Speed: {stats.speed}</div>
          </Footer>
        </Container>
        </div>
      );
    }
    else if (stats.health <= 0){
      return (
        <div>
        <Container>
          <Main>
          <div>
          You Lose!
          </div>
          </Main>
          <SideBar><Text /></SideBar>
          <ContentBox>
            <Content1>
              Action Buttons
              <div>
                <button onClick={routeChange}>Go Home and Recover</button>
              </div>
            </Content1>
          </ContentBox>
          <Footer>Player Stats
          <div>User: {stats.username} Health: {stats.health} Attack: {stats.attack} Defense: {stats.defense} Speed: {stats.speed}</div>
          </Footer>
        </Container>
        </div>
      );
    }
    else{
      return (
        <div>
        <Container>
          <Main>
          <div>
          Enemy and Enemy Stats
          </div>
          <div>
          <img src= {enemy}/>
          </div>
          <div>
          Enemy: {battle.monster} Health: {battle.health} Attack: {battle.attack} Defense: {battle.defense} Speed: {battle.speed}
          </div>
          </Main>
          <SideBar><Text /></SideBar>
          <ContentBox>
            <Content1>
              Action Buttons
              <div>
                <button onClick={() => updateBattle(stats, battle, "attack")}>Attack</button>
                <button onClick={() => updateBattle(stats, battle, "defend")}>Defend</button>
                <button onClick={() => updateBattle(stats, battle, "heal")}>Heal</button>
                <p>IF YOU WANNA RUN FROM BATTLE,GO TO ONE OF THE OTHER LOCATIONS</p>
              </div>
            </Content1>
          </ContentBox>
          <Footer>Player Stats
          <div>User: {stats.username} Health: {stats.health} Attack: {stats.attack} Defense: {stats.defense} Speed: {stats.speed}</div>
          </Footer>
        </Container>
        </div>
      );
    }

  }

}
return (
  page()
);


};

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "sidebar main main main"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`;

const Container2 = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "sidebar main main main"
    "sidebar content content content"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`;
const Container3 = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`;
//background: #1f2128;
const Main = styled.div`

  background-color:rgba(0, 0, 0, 0.5);
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
//background: #9aaab7;
const SideBar = styled.div`
  background: #1f2128;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
//background: #a6b8b9;
const Content1 = styled.div`
  background-color:rgba(0, 0, 0, 0.5);
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
//background: #ff9637;
const Footer = styled.footer`
  background: #1f2128;;
  grid-area: footer;
  padding: 0.25rem;
`;

export default App;
