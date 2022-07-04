import React from "react";
import { Wrapper, Content } from "./Infobar.styles";
import Button from "../Button";

const Infobar = () => {
   return (
      <Wrapper>
         <Content>
            <p>Hello 👋, my name is</p>
            <h1>Oluwatobi Godman Faseun</h1>
            <h1 id="job">I am a software developer</h1>
            <br />
            <p>
               Coding and building software is a passion of mine. I have a
               background in software development and I have a passion for
               building software that is user-friendly and easy to use.
            </p>
            <br />
            <Button text="Get In Touch" />
         </Content>
      </Wrapper>
   );
};
export default Infobar;
