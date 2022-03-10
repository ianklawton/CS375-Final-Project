import React, { useState } from "react";
import Inventory from "./Inventory";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { craftItems, HomeMessages } from './data';
import Heading from "./TableHead";
import Text from "./homeText";
import "./Home.css";
import styled from "styled-components";
import background from "./Images/Home.jpg";

let bool = false
let state = "Open Inventory"
const App = () => {
  const [inventoryToggle, setInventory] = useState(false);
  const ht= useState(true);
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
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <SideBar>{ht && <Text />}</SideBar>
      <ContentBox>
        <Content1>
          <div className="container">
               <div className="row">
                 <div className="col-md-4"></div>
                 <div className="col-md-4">
                   <Select options={ craftItems } />
                 </div>
                 <div className="col-md-4"></div>
               </div>
            </div>
          <button className="craft" onClick={() => HomeMessages.unshift("Crafted")}>Craft</button>
        </Content1>
        <Content2>
          {inventoryToggle && <Heading />}
          {inventoryToggle && <Inventory />}
          <button onClick={handleClick}>{state}</button>
        </Content2>
      </ContentBox>
      <Footer>Player Level and Stats</Footer>
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
  background-color:rgba(245, 173, 66, 0.5);
  grid-area: footer;
  padding: 0.25rem;
`;

export default App;
