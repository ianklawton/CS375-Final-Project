import React, { useState } from "react";
import "./Home.css";
import "./Cave.css";
import styled from "styled-components";
import Text from "./caveText";
import Heading from "./TableHead";
import Inventory from "./Inventory";
import background from "./Images/Cave.jpg";
import witch from "./Images/Witch.png";
import skeleton from "./Images/Skeleton.png";
import goblin from "./Images/Goblin.png";
import dragon from "./Images/Dragon.png";
import {exploreCave} from "./data"
import {getActiveStats} from "./data"
import {setActiveStats} from "./data"
import {collectItems} from "./data"
import {battleSequence} from "./Combat"


function collectOre(){
  collectItems({item : "Branch", quantity : 1, type : "Crafting Item",description : ""})
  //CaveMessages.unshift("You mined some ore");
  //setHT(false);
  setTimeout(function(){
    //setHT(true)
  }.bind(),0.5);
  //stop();
  //gather();
}


const App = () => {

  const [bool, setBool] = useState(true)
  const [inventoryToggle, setInventory] = useState(false);
  const [ht, setHT]= useState(true);
  const [state, setButton] = useState("Open Inventory")
  const [battle, setBattle] = useState("Start");
  const [stats, setStats] = useState(getStats())

  async function resolvePromise(){
      let jsonData = await exploreCave();
      setBattle(jsonData)



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
    let temp;
    temp = await battleSequence(player,enemy,action);
    new_user = temp[0]
    new_enemy = temp[1]

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
      <SideBar><Text /></SideBar>
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
          {inventoryToggle && <Inventory />}
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
    console.log(battle)
    let enemy;
    battle.defense = 0;
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
    "sidebar content content content"
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
