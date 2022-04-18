import React from "react";
import { Wrapper, Content } from "./Navbar.styles";

const Navbar = () => {
   return (
      <Wrapper>
         <Content>
            <div id="logo">
               <p>Godman</p>
            </div>
            <div className="action-nav">
               <p className="hide">Home</p>
               <p className="hide">About</p>
               <p className="hide">Portfolio</p>
               <p className="hide">Contact</p>
               <p id="resume">Resume</p>
            </div>
         </Content>
      </Wrapper>
   );
};
export default Navbar;
