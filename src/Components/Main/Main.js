import React, { useEffect, useState } from "react";

// import children to use in Main
import MainList from "./MainList.js";
import MainEntry from "./MainEntry.js";
import MainInfo from "./MainInfo.js";
import UserInput from "../UserInput/UserInput.js";
import Nav from "../Nav/Nav.js";


const Main = () => {

  // html for the main page
  return (
    <div id="intro">
      <Nav />
      <h1>Welcome to the IBD Site!</h1>
      <div id="parentChild">
        About this website
        <MainList />
      </div>
      <hr />
      <MainEntry />
      <UserInput />
      <MainInfo />
      <p></p>
    </div>
  );
};

export default Main;