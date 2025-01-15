import React from "react";
import { Wrapper, Content } from "./Infobar.styles";
import Button from "../Button";

const Infobar = () => {
   return (
      <Wrapper>
         <Content>
            <h1>Hello 👋, I'm Oluwatobi Godman Faseun</h1>

            <h2>Software Developer</h2>

            <p>
               I specialize in creating user-friendly software solutions and
               backend APIs that deliver real value. Let's build something
               amazing together.
            </p>
            <br />
            <Button text="Get In Touch" />
         </Content>
      </Wrapper>
   );
};

export default Infobar;
