import React from "react";
import { Wrapper } from "./infobar2.styles";

const Infobar2 = () => {
   return (
      <Wrapper>
         <p>
            Hey, there I’m Godman, a self-taught software developer based in
            Lagos, Nigeria. I'm a self-taught developer with a passion for
            building software that is user-friendly and easy to use.
         </p>
         <p>
            I specialize mostly in backend API development but I can still hold
            my own on the client-side as well.
         </p>
         <p>
            Whenever I’m not on my laptop coding, I love watching movies,
            football matches (I'm a big football fan), I love music and
            exercising.
         </p>
         <p>Some technologies i have worked with</p>
         <div id="stack">
            <ul id="first-list">
               <li>HTML</li>
               <li>CSS</li>
               <li>Javascript</li>
               <li>SQL</li>
               <li>sqlite</li>
               <li>Python</li>
            </ul>
            <ul id="second-list">
               <li>ReactJs</li>
               <li>Bootstrap</li>
               <li>Python Flask</li>
               <li>Google Maps</li>
               <li>git</li>
               <li>Sqlalchemy</li>
            </ul>
         </div>
      </Wrapper>
   );
};
export default Infobar2;
