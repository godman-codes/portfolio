/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Wrapper } from "./Contacts.styles";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faGithub,
   faLinkedin,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Contacts = () => {
   return (
      <Wrapper>
         <div>
            <p>
               Have a little, something to talk about? well, why dont you send
               me a mail now. i will get back to you as soon as i can. I will be
               glad to hear from you and be part of something great .
            </p>
            <br />
            <Button text="Send a mail" />
         </div>
         <div id="icon-div">
            <a href="https://github.com/godman-codes">
               <FontAwesomeIcon icon={faGithub} className="icons" />
            </a>
            <a href="/">
               <FontAwesomeIcon icon={faLinkedin} className="icons" />
            </a>
            <a href="https://twitter.com/Godman_codes">
               <FontAwesomeIcon icon={faTwitter} className="icons" />
            </a>
         </div>
      </Wrapper>
   );
};
export default Contacts;
