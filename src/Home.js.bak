import React, { useState } from "react";
import Inventory from "./Inventory";
//import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeMessages,collectItems, craftItems, equipItems } from './data';
import Heading from "./TableHead";
import Text from "./homeText";
import "./Home.css";
import styled from "styled-components";
import background from "./Images/Home.jpg";
import {getActiveStats} from "./data";
import useSound from 'use-sound';
import crafting from "./Images/craft.mp3";
import equipping from "./Images/equip.mp3";
import opening from "./Images/doorOpen.mp3";
import closing from "./Images/doorClose.mp3";
import nocraft from "./Images/error.mp3"; 

const App = () => {
  const [bool, setBool] = useState(true)
  const [b, setB] = useState(true)
  const [inventoryToggle, setInventory] = useState(false);
  const [stats, setStats] = useState(getStats());
  const [state, setButton] = useState("Open Inventory");
  const [table, setTable] = useState(getTable());
  const [craft] = useSound(crafting);
  const [equip] = useSound(equipping);
  const [playbackRate] = React.useState(2);
  const [open] = useSound(opening, {playbackRate});
  const [close] = useSound(closing, {playbackRate});
  const [error] = useSound(nocraft);
  const StyledButton = styled.button`
    font-size: 10px;
`;

  async function getTable(){
    if(b){
    setB(false);
    let jsonData = await Inventory();
    setTable({this: "re-render"})
    setTable(jsonData);
  }
}

  function handleClick(e) {
    e.preventDefault();
    if(inventoryToggle){
      setInventory(false);
      setButton("Open Inventory");
      close();
    }
    else{
      setInventory(true);
      setButton("Close Inventory");
      open();
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

  const [ht, setHT]= useState(true);

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <SideBar>{ht && <Text />}</SideBar>
      <ContentBox>
        <Content1>
          Crafting Area
          <div>
            <StyledButton onClick={handleCraftWS}>Craft Wooden Sword</StyledButton>
            <StyledButton onClick={handleCraftWP}>Craft Wooden Pickaxe</StyledButton>
            <StyledButton onClick={handleCraftWSh}>Craft Wooden Shield</StyledButton>

            <StyledButton onClick={handleCraftSS}>Craft Stone Sword</StyledButton>
            <StyledButton onClick={handleCraftSP}>Craft Stone Pickaxe</StyledButton>

            <StyledButton onClick={handleCraftIS}>Craft Iron Sword</StyledButton>
            <StyledButton onClick={handleCraftISh}>Craft Iron Shield</StyledButton>
            <StyledButton onClick={handleCraftIA}>Craft Iron Armor</StyledButton>

            <StyledButton onClick={handleCraftL}>Craft Leather Armor</StyledButton>
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
        <Content3>
          Equip Weapons
          <div>
            <StyledButton onClick={equipWS}>Equip Wooden Sword</StyledButton>
            <StyledButton onClick={equipWSh}>Equip Wooden Shield</StyledButton>

            <StyledButton onClick={equipSS}>Equip Stone Sword</StyledButton>

            <StyledButton onClick={equipIS}>Equip Iron Sword</StyledButton>
            <StyledButton onClick={equipISh}>Equip Iron Shield</StyledButton>
            <StyledButton onClick={equipIA}>Equip Iron Armor</StyledButton>

            <StyledButton onClick={equipL}>Equip Leather Armor</StyledButton>

          </div>

        </Content3>
      </ContentBox>
      <Footer>Player Stats
      <div>User: {stats.username} Health: {stats.health} Attack: {stats.attack} Defense: {stats.defense} Speed: {stats.speed}</div>
      </Footer>
    </Container>
    </div>
  );

  // Crafting functions
  function handleCraftWS() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 3;
    let countWood = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }
    }
    if (countWood >= checkWood){
      setB(true)
      HomeMessages.unshift("Crafted a Wooden Sword");
      collectItems({item : "Wooden Sword", quantity : 1, type : "Weapon",description : "+10 Attack", attack : 10, defense: 0,speed: 2, equipped : false});
      craftItems({item : "Wood", quantity : 3, type : "Crafting Item",description : "For tools"});
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough wood");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
    
  }
  function handleCraftWP() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 2;
    let countWood = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }
    }
    if (countWood >= checkWood){
      setB(true)
      HomeMessages.unshift("Crafted a Wooden Pickaxe");
      collectItems({item : "Wooden Pickaxe", quantity : 1, type : "Crafting Tool",description : "For mining iron"})
      craftItems({item : "Wood", quantity : 2, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough wood");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
  }
  function handleCraftWSh() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 2;
    let countWood = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }
    }
    if (countWood >= checkWood){
      setB(true)
      HomeMessages.unshift("Crafted a Wooden Shield");
      collectItems({item : "Wooden Shield", quantity : 1, type : "Shield",description : "+5 Defense",  attack : 5, defense: 5,speed: -2, equipped : false})
      craftItems({item : "Wood", quantity : 2, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough wood");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
  }
  function handleCraftSS() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 1;
    let checkStone = 2;
    let countWood = 0;
    let countStone = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }else if(inventory[i].item === "Stone"){
        countStone = inventory[i].quantity;
      }
    }
    if (countWood >= checkWood && countStone >= checkStone){
      setB(true)
      HomeMessages.unshift("Crafted a Stone Sword");
      collectItems({item : "Stone Sword", quantity : 1, type : "Weapon",description : "+20 Attack", attack : 20, defense: 0,speed: 2, equipped : false})
      craftItems({item : "Stone", quantity : 2, type : "Crafting Item",description : "For tools"})
      craftItems({item : "Wood", quantity : 1, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough materials");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
  }
  function handleCraftSP() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 1;
    let checkStone = 2;
    let countWood = 0;
    let countStone = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }else if(inventory[i].item === "Stone"){
        countStone = inventory[i].quantity;
      }
    }
    if (countWood >= checkWood && countStone >= checkStone){
      setB(true)
      HomeMessages.unshift("Crafted a Stone Pickaxe");
      collectItems({item : "Stone Pickaxe", quantity : 1, type : "Crafting Tool",description : "For mining iron"})
      craftItems({item : "Stone", quantity : 2, type : "Crafting Item",description : "For tools"})
      craftItems({item : "Wood", quantity : 1, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough materials");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
  }
  function handleCraftIS() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 1;
    let checkIron = 2;
    let countWood = 0;
    let countIron = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }else if(inventory[i].item === "Iron"){
        countIron = inventory[i].quantity;
      }
    }
    if (countWood >= checkWood && countIron >= checkIron){
      setB(true)
      HomeMessages.unshift("Crafted an Iron Sword");
      collectItems({item : "Iron Sword", quantity : 1, type : "Weapon",description : "+30 Attack",  attack : 30, defense: 0,speed: 0, equipped : false})
      craftItems({item : "Iron", quantity : 2, type : "Crafting Item",description : "For tools"})
      craftItems({item : "Wood", quantity : 1, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough materials");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    } 
  }
  function handleCraftISh() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 1;
    let checkIron = 1;
    let checkStone = 1;
    let countWood = 0;
    let countIron = 0;
    let countStone = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }else if(inventory[i].item === "Iron"){
        countIron = inventory[i].quantity;
      }else if(inventory[i].item === "Stone"){
        countStone = inventory[i].quantity
      }
    }
    if (countWood >= checkWood && countIron >= checkIron && countStone >= checkStone){
      setB(true)
      HomeMessages.unshift("Crafted an Iron Shield");
      collectItems({item : "Iron Shield", quantity : 1, type : "Shield",description : "+15 Defense +5 Attack", attack : 8, defense: 15,speed: -5, equipped : false})
      craftItems({item : "Iron", quantity : 1, type : "Crafting Item",description : "For tools"})
      craftItems({item : "Wood", quantity : 1, type : "Crafting Item",description : "For tools"})
      craftItems({item : "Stone", quantity : 1, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough materials");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
  }
  function handleCraftIA() {
    let inventory = JSON.parse(stats.inventory);
    let checkWood = 1;
    let checkIron = 2;
    let countWood = 0;
    let countIron = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Wood") {
        countWood = inventory[i].quantity;
      }else if(inventory[i].item === "Iron"){
        countIron = inventory[i].quantity;
      }
    }
    if (countWood >= checkWood && countIron >= checkIron){
      setB(true)
      HomeMessages.unshift("Crafted an Iron Armor");
      collectItems({item : "Iron Armor", quantity : 1, type : "Armor",description : "+30 Defence"})
      craftItems({item : "Iron", quantity : 2, type : "Crafting Item",description : "For tools"})
      craftItems({item : "Wood", quantity : 1, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough materials");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
  }
  function handleCraftL() {
    let inventory = JSON.parse(stats.inventory);
    let checkLeather = 2;
    let countLeather = 0;
    for(let i=0; i < inventory.length;i++){
      if (inventory[i].item === "Leather") {
        countLeather = inventory[i].quantity;
      }
    }
    if (countLeather >= checkLeather){
      setB(true)
      HomeMessages.unshift("Crafted Leather Armor");
      collectItems({item : "Leather Armor", quantity : 1, type : "Armor",description : "+10 Defense"})
      craftItems({item : "Leather", quantity : 2, type : "Crafting Item",description : "For tools"})
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      craft();
    }else{
      HomeMessages.unshift("You don't have enough materials");
      setHT(false);
      setTimeout(function(){
        setHT(true)
      }.bind(),0.5);
      error();
    }
  }

  // Equipping Functions
  function equipWS() {
    HomeMessages.unshift("Wooden Sword equipped");
    equipItems();
    craftItems({item : "Wooden Sword", quantity : 1, type :  "Weapon",description : "+5 Attack"})
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    equip();
  }
  function equipWSh() {
    HomeMessages.unshift("Wooden Shield equipped");
    equipItems();
    craftItems({item : "Wooden Shield", quantity : 1, type :  "Weapon",description : "+3 Defence"})
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    equip();
  }
  function equipSS() {
    HomeMessages.unshift("Stone Sword equipped");
    equipItems();
    craftItems({item : "Stone Sword", quantity : 1, type :  "Weapon",description : "+8 Attack"})
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    equip();
  }
  function equipIS() {
    HomeMessages.unshift("Iron Sword equipped");
    equipItems();
    craftItems({item : "Iron Sword", quantity : 1, type :  "Weapon",description : "+10 Attack"})
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    equip();
  }
  function equipISh() {
    HomeMessages.unshift("Iron Shield equipped");
    equipItems();
    craftItems({item : "Iron Shield", quantity : 1, type :  "Weapon",description : "+7 Defence"})
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    equip();
  }
  function equipIA() {
    HomeMessages.unshift("Iron Armor equipped");
    equipItems();
    craftItems({item : "Iron Armor", quantity : 1, type :  "Weapon" ,description : "+10 Defence"})
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    equip();
  }
  function equipL() {
    HomeMessages.unshift("Leather Armor equipped");
    equipItems();
    craftItems({item : "Leather Armor", quantity : 1, type : "Weapon",description : "+5 Defence"})
    setHT(false);
    setTimeout(function(){
      setHT(true)
    }.bind(),0.5);
    equip();
  }
};



// Styled Components Styling
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
  width: 50%;
  height: 100%;
`;
const Content2 = styled.div`
  background-color:rgba(0, 0, 0, 0.5);
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #1f2128;
  grid-area: footer;
  padding: 0.25rem;
`;

export default App;
