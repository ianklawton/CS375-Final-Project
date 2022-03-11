import React, { useState } from "react";
import styled from "styled-components";
import Text from "./woodsText";
import Heading from "./TableHead";
import background from "./Images/Forest.jpg";
import Inventory from "./Inventory";
import { collectItems, WoodsMessages } from "./data";
import useSound from 'use-sound';
import soundUrl from "./Images/woods.mp3";
import chopping from "./Images/chopping-wood.mp3"; 
import slaying from "./Images/deer.mp3";
import gathering from "./Images/branches.mp3"; 



let bool = false
let state = "Open Inventory"
const App = () => {
  const [inventoryToggle, setInventory] = useState(false);
  const [ht, setHT]= useState(true);
 
  // Loading Sound Effects
  const [play, {stop}] = useSound(soundUrl);
  const [chop] = useSound(chopping);
  const [slay] = useSound(slaying);
  const [gather] = useSound(gathering);

  function handleClick(e) {
    e.preventDefault();
    if(bool){
      bool = false
      state = "Open Inventory"
    }
    else{
      bool = true
      state = "Close Inventory"
    }
    setInventory(bool);
  }
  
  function killDeer(){
    collectItems({item : "Venison", quantity : 1, type : "Food",description : "Gain Back 10 Health"})
    collectItems({item : "Leather", quantity : 1, type : "Crafting Item",description : ""})
    WoodsMessages.unshift("The deer was slain, enjoy your trophy");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    stop();
    slay();
  }

  function collectBranches(){
    collectItems({item : "Branch", quantity : 1, type : "Crafting Item",description : ""})
    WoodsMessages.unshift("You picked up some branches");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    stop();
    gather();
  }

  function collectWood(){
    collectItems({item : "Wood", quantity : 1, type : "Crafting Item",description : ""})
    WoodsMessages.unshift("Chopped up some wood");
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    stop();
    chop();
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <SideBar onMouseEnter={play} onMouseLeave={stop}>{ht && <Text />}</SideBar>
      <ContentBox >
        <Content1>
          Action Buttons
          <div>
          <button onClick={collectBranches}>Collect Branches</button>
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
        <div style={{opacity: 1.0}}>
          Player Stats
        </div>
      </Footer>
    </Container>
    </div>
  );
};

const Container = styled.div`

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
//{item: 'Sword', quantity: 1, type: weapon, description: '+10 Attack', attack: 10, speed: 0}
//{item: 'Shield', quantity: 1, type: 'armour', description: '+4 Defence', defence: 4, speed: -4}
