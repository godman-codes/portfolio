import React from "react";
import { Wrapper, Content } from "./Infobar.styles";
import Button from "../Button";

const Infobar = () => {
   return (
      <Wrapper>
         <Content>
            <p>Hello 👋, my name is</p>
            <h1>Oluwatobi Godman Faseun</h1>
            <h1 id="job">I am a Full stack web developer</h1>
            <br />
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
               a, ullam odit laudantium laboriosam ab quam, dicta quod dolores
               perspiciatis consequuntur consequatur ea voluptatem nemo aut
               aliquam adipisci quo atque!
            </p>
            <br />
            <Button text="Get In Touch" />
         </Content>
      </Wrapper>
   );
};
export default Infobar;
