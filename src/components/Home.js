import React from "react";
import Navbar from "./Navbar";
import ProfilePicture from "./ProfilePicture";
import Profile from "../images/profile2.jpg";
import Infobar from "./Infobar";
import Subtopic from "./Subtopic";

const Home = () => {
   return (
      <>
         <Navbar />
         <ProfilePicture image={Profile} />
         <Infobar />
         <Subtopic index="01" subTopic="About Me" />
      </>
   );
};
export default Home;
