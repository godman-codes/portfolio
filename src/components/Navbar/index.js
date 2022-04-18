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
               <p>Home</p>
               <p>About</p>
               <p>Portfolio</p>
               <p>Contact us</p>
            </div>
         </Content>
      </Wrapper>
   );
};
export default Navbar;
