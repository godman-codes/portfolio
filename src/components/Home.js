import React from "react";
import Navbar from "./Navbar";
import ProfilePicture from "./ProfilePicture";
import Profile from "../images/profile2.jpg";
import Infobar from "./Infobar";

const Home = () => {
   return (
      <>
         <Navbar />
         <ProfilePicture image={Profile} />
         <Infobar />
      </>
   );
};
export default Home;
