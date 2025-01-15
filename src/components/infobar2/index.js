import React from "react";
import { Wrapper } from "./infobar2.styles";

const Infobar2 = () => {
   return (
      <Wrapper>
         <section>
            <p>
               I’m a self-taught software developer based in Lagos, Nigeria.
               While I specialize in backend API development, I also create
               seamless client-side experiences. I’m passionate about building
               efficient, user-friendly solutions to real-world problems.
            </p>
         </section>
         <section>
            <h2>Technologies I've Worked With</h2>
            <div id="stack">
               <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>SQL</li>
                  <li>Python</li>
                  <li>ASP.NET</li>
                  <li>AWS</li>
                  <li>Digital Ocean</li>
               </ul>
               <ul>
                  <li>SQLite</li>
                  <li>Flask</li>
                  <li>Bootstrap</li>
                  <li>Google Maps API</li>
                  <li>Git</li>
                  <li>SQLAlchemy</li>
                  <li>MSSQL</li>
                  <li>Postgre</li>
                  <li>Docker</li>
                  <li>Windows IIS</li>
               </ul>
            </div>
         </section>
         <br />
         <section>
            <h2>Fun Facts</h2>
            <p>
               When I’m not coding, I enjoy watching movies, football, listening
               to music, and exercising. I'm also a huge football fan!
            </p>
         </section>
      </Wrapper>
   );
};

export default Infobar2;
