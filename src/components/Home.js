import React from "react";
import Navbar from "./Navbar";
import ProfilePicture from "./ProfilePicture";
import Profile from "../images/profile2.jpg";
import Infobar from "./Infobar";
import Subtopic from "./Subtopic";
import Infobar2 from "./infobar2";

const Home = () => {
   return (
      <>
         <Navbar />
         <ProfilePicture image={Profile} text="Godman profile picture" />
         <Infobar />
         <Subtopic index="01" subTopic="About Me" />
         <Infobar2 />
         <br />
         <Subtopic index="02" subTopic="My Work" />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
      </>
   );
};
export default Home;
