import React, { useState } from "react";
import styled from "styled-components";
import Text from "./mountainText";
import Heading from "./TableHead";
import background from "./Images/Mountain.jpg";
import Inventory from "./Inventory";
import slaying from "./Images/deer.mp3";
import stoning from "./Images/stones.mp3";
import {collectItems, MountainMessages} from "./data";
import useSound from 'use-sound';
import {getActiveStats} from "./data"

const App = () => {
  const [b, setB] = useState(true)
  const [bool, setBool] = useState(true)
  const [inventoryToggle, setInventory] = useState(false);
  const [ht, setHT]= useState(true);
  const [state, setButton] = useState("Open Inventory")
  const [stats, setStats] = useState(getStats())
  const [table, setTable] = useState(getTable());
  const [slay] = useSound(slaying);
  const [stone] = useSound(stoning);

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

  async function getStats(){
    if(bool){
    setBool(false);
    let jsonData = await getActiveStats();
    setStats({this: "re-render"})
    setStats(jsonData);
  }
  }


  async function getTable(){
    if(b){
    setB(false);
    let jsonData = await Inventory();
    setTable({this: "re-render"})
    setTable(jsonData);
  }
}

  function collectStone(){
    collectItems({item : "Stone", quantity : 1, type : "Crafting Item",description : ""})
    MountainMessages.unshift("You picked up a stone");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    stone();
  }

  function killGoat(){
    collectItems({item : "Chevon", quantity : 1, type : "Food",description : "+8 Health"})
    MountainMessages.unshift("The goat was slain, enjoy your trophy");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    slay();
  }


  return (
    <div>
    <Container>
      <SideBar>{ht && <Text />}</SideBar>
      <ContentBox >
        <Content1>
          Action Buttons
          <div>
          <button onClick={collectStone}>Collect Stone</button>
          <button onClick={killGoat}>Slay Goat</button>
          </div>
        </Content1>
        <Content2>
        Inventory
        <div align="center">
          {inventoryToggle && <Heading />}
          {inventoryToggle && table}
          <button onClick={handleClick}>{state}</button>
        </div>
        </Content2>
      </ContentBox>
      <Footer>Player Stats
        <div>User: {stats.username} Health: {stats.health} Attack: {stats.attack} Defense: {stats.defense} Speed: {stats.speed}</div>
      </Footer>
    </Container>
    </div>
  );
};

const Container = styled.div`
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
// const Main = styled.main`
//   background: #1f2128;

//   color: white;
//   grid-area: main;
//   padding: 0.25rem;
//   width: 100%;
//   height: 50%;
// `;
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
const Content1 = styled.div`
  background-color:rgba(0, 0, 0, 0.5);
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Footer = styled.footer`
  background: #1f2128;
  grid-area: footer;
  padding: 0.25rem;
`;

export default App;
