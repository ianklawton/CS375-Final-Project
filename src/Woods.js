import React, { useState } from "react";
import styled from "styled-components";
import Text from "./woodsText";
import Heading from "./TableHead";
import background from "./Images/Forest.jpg";
import Inventory from "./Inventory";
import { collectItems, WoodsMessages, materials } from "./data";
import useSound from 'use-sound';
import chopping from "./Images/chopping-wood.mp3";
import slaying from "./Images/deer.mp3";
import {getActiveStats} from "./data"



const App = () => {
  const [bool, setBool] = useState(true)
  const [inventoryToggle, setInventory] = useState(false);
  const [ht, setHT]= useState(true);
  const [state, setButton] = useState("Open Inventory");
  const [stats, setStats] = useState(getStats());


  // Loading Sound Effects
  const [chop] = useSound(chopping);
  const [slay] = useSound(slaying);

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
    setStats(jsonData);
    console.log(jsonData)
  }
  }

  function killDeer(){
    collectItems({item : "Venison", quantity : 1, type : "Food",description : "+10 Health"})
    collectItems({item : "Leather", quantity : 1, type : "Crafting Item",description : ""})
    materials[2].quantity += 2;
    materials[3].quantity += 2;
    WoodsMessages.unshift("The deer was slain, enjoy your trophy");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    slay();
  }

  // function collectBranches(){
  //   collectItems({item : "Branch", quantity : 1, type : "Crafting Item",description : ""})
  //   materials[0].quantity += 1;
  //   WoodsMessages.unshift("You picked up some branches");
  //   setHT(false);
  //   setTimeout(function(){
  //     setHT(true)
  //   }.bind(),0.5);
  //   stop();
  //   gather();
  // }

  function collectWood(){
    collectItems({item : "Wood", quantity : 1, type : "Crafting Item",description : ""})
    materials[0].quantity += 5;
    WoodsMessages.unshift("Chopped up some wood");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    chop();
  }

  return (
    <div>
    <Container>
      <SideBar>{ht && <Text />}</SideBar>
      <ContentBox>
        <Content1>
          Action Buttons
          <div>
          <button onClick={collectWood}>Collect Wood</button>
          <button onClick={killDeer}>Slay Deer</button>
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
      <Footer>
          Player Stats
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
