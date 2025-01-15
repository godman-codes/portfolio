import React from "react";
import { Wrapper, Content } from "./Navbar.styles";

const Navbar = ({ callback1, callback2, callback3 }) => {
   return (
      <Wrapper>
         <Content>
            <div id="logo">
               <p>Godman</p>
            </div>
            <div className="action-nav">
               <p className="hide">Home</p>
               <p className="hide" onClick={callback1}>
                  About
               </p>
               <p className="hide" onClick={callback2}>
                  Portfolio
               </p>
               <p className="hide" onClick={callback3}>
                  Contact
               </p>
               <p id="resume">
                  <a
                     style={{ color: "white", textDecoration: "none" }}
                     href="http://bit.ly/4ai1C0U"
                  >
                     Resume
                  </a>
               </p>
            </div>
         </Content>
      </Wrapper>
   );
};
export default Navbar;
