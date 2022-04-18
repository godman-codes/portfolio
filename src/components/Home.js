import React from "react";
import Navbar from "./Navbar";
import ProfilePicture from "./ProfilePicture";
import Profile from "../images/profile2.jpg";
import Infobar from "./Infobar";
import Subtopic from "./Subtopic";
import Infobar2 from "./infobar2";
import MyWorks from "./MyWorks";

const movieDb = {
   header: "Movie House",
   paragraph:
      "A website that allows users to search for movies and shows, and rate them as long as they have an account with The MovieDb api. The website was built using React, styledComponents and the Movie DB API.",
   technologies: ["React", "Styled Components", "Movie DB API"],
   extLinks: [
      "https://github.com/godman-codes/react-movie-house",
      "https://clever-pike-7b3b67.netlify.app/location",
   ],
};

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
         <MyWorks project={movieDb} />
         <br />
         <br />
         <br />
         <Subtopic index="03" subTopic="Contact Your Mans" />

         <br />
         <br />
      </>
   );
};
export default Home;
