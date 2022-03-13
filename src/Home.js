import React, { useState } from "react";
import Inventory from "./Inventory";
import Materials from "./material";
//import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeMessages, inventoryData, materials } from './data';
import Heading from "./TableHead";
import MaterialHeader from "./MaterialHead";
import Text from "./homeText";
import "./Home.css";
import styled from "styled-components";
import background from "./Images/Home.jpg";


let bool = false
let state = "Open Inventory"

let mbool = false
let mstate = "Show Materials"

const App = () => {
  const [inventoryToggle, setInventory] = useState(false);
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

  const [materialToggle, setMaterial] = useState(false);
  function handleMat(e) {
    e.preventDefault();
    if(mbool){
      mbool = false
      mstate = "Show Materials"
    }
    else{
      mbool = true
      mstate = "Hide Materials"
    }
    setMaterial(mbool);
  }

  const [ht, setHT]= useState(true);
 
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <SideBar>{ht && <Text />}</SideBar>
      <ContentBox>
        <Content1>
          Crafting Area
          <div align="center">
            {materialToggle && < MaterialHeader />}
            {materialToggle && < Materials />}
            <button onClick={handleMat}>{mstate}</button>
          </div>
          
          <div>
            <button onClick={handleCraftWS}>Craft Wooden Sword</button>
            <button onClick={handleCraftMS}>Craft Metal Sword</button>
            <button onClick={handleCraftWA}>Craft Wooden Armor</button>
            <button onClick={handleCraftMA}>Craft Metal Armor</button>
            <button onClick={handleCraftWH}>Craft Wooden Hammer</button>
            <button onClick={handleCraftMH}>Craft Metal Hammer</button>
            <button onClick={handleCraftWSh}>Craft Wooden Shield</button>
            <button onClick={handleCraftMSh}>Craft Metal Shield</button>
            <button onClick={handleCraftL}>Craft Leather</button>
            <button onClick={handleCraftF}>Craft Food</button>
          </div>
        </Content1>
        <Content2>
          Inventory
          <div align="center">
            {inventoryToggle && <Heading />}
            {inventoryToggle && <Inventory />}
            <button onClick={handleClick}>{state}</button>
          </div>
        </Content2>
      </ContentBox>
      <Footer>Player Level and Stats</Footer>
    </Container>
    </div>
  );

  // Crafting functions
  function handleCraftWS() {
    HomeMessages.unshift("Crafted a Wooden Sword");
    materials[0].quantity -= 5;
    inventoryData[0].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftMS() {
    HomeMessages.unshift("Crafted a Metal Sword");
    materials[1].quantity -= 5;
    inventoryData[6].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftWA() {
    HomeMessages.unshift("Crafted Wooden Armor");
    materials[0].quantity -= 5;
    inventoryData[3].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftMA() {
    HomeMessages.unshift("Crafted Metal Armor");
    materials[1].quantity -= 5;
    inventoryData[5].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftWH() {
    HomeMessages.unshift("Crafted a Wooden Hammer");
    materials[0].quantity -= 5;
    inventoryData[1].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftMH() {
    HomeMessages.unshift("Crafted a Metal Hammer");
    materials[1].quantity -= 5;
    inventoryData[7].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftWSh() {
    HomeMessages.unshift("Crafted a Wooden Shield");
    materials[0].quantity -= 5;
    inventoryData[2].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftMSh() {
    HomeMessages.unshift("Crafted a Metal Shield");
    materials[1].quantity -= 5;
    inventoryData[4].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftL() {
    HomeMessages.unshift("Crafted Leather");
    materials[2].quantity -= 5;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
  function handleCraftF() {
    HomeMessages.unshift("Made some deer meat soup");
    materials[3].quantity -= 5;
    inventoryData[8].quantity += 1;
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
  }
};


// Styling Info
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

// Dropdown code
/* <div className="container">
               <div className="row">
                 <div className="col-md-4"></div>
                 <div className="col-md-4">
                   <Select options={ craftItems } />
                 </div>
                 <div className="col-md-4"></div>
               </div>
</div> */

export default App;
