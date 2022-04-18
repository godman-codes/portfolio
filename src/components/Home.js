import React from "react";
import Navbar from "./Navbar";
import ProfilePicture from "./ProfilePicture";
import Profile from "../images/profile2.jpg";

const Home = () => {
   return (
      <>
         <Navbar />
         <ProfilePicture image={Profile} />
      </>
   );
};
export default Home;
