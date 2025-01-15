import React, { useRef } from "react";
import Navbar from "./Navbar";
import ProfilePicture from "./ProfilePicture";
import Profile from "../images/profile2.jpg";
import Infobar from "./Infobar";
import Subtopic from "./Subtopic";
import Infobar2 from "./infobar2";
import MyWorks from "./MyWorks";
import Contacts from "./Contacts";
const PLTSAPP = {
   header: "PLT SAP Platform",
   paragraph:
      "A web application that consists of a backend API and a frontend application. This platform is designed for managing license-based deals, offering features like license lifecycle management, dashboard analytics, and real-time notifications to clients about their deal lifecycle stages.",
   technologies: ["React", "JavaScript", "ASP.NET", "PostgreSQL", "C#"],
   extLinks: [
      "https://github.com/Platview-Technologies/PLT-ANP-API",
      "https://github.com/Platview-Technologies/plt-anp",
      "https://plat-anp-n6jhf.ondigitalocean.app/",
   ],
};
const movieDb = {
   header: "Movie House",
   paragraph:
      "A website that allows users to search for movies and shows, and rate them as long as they have an account with The MovieDb api. The website was built using React, styledComponents and the Movie DB API.",
   technologies: ["React", "Javascript", "Styled Components", "Movie DB API"],
   extLinks: [
      "https://github.com/godman-codes/react-movie-house",
      "https://clever-pike-7b3b67.netlify.app",
   ],
};
const cashAttendanceApp = {
   header: "Cashier App",
   paragraph:
      "A web application that allows cashier attendant in malls to query items from the stores database perform some calculations with quantity and price. This application was built using python flask on the backend and template were rendered using HTML and css ",
   technologies: ["Python", "Flask", "HTML", "CSS"],
   extLinks: [
      "https://github.com/godman-codes/cashier",
      "https://github.com/godman-codes/cashier",
   ],
};
const schoolBusAPi = {
   header: "School Bus API",
   paragraph:
      "An python flask backend API for a school bus application that has location tracking for the driver bus so that parent can track their ward's bus in real time. it has separate modules for driver, parent and school admin with some request that can be made using a jwt token. This API was built using python flask server and some modules were imported from the flask library.",
   technologies: ["Python", "Flask", "JWT", "SQl"],
   extLinks: [
      "https://github.com/godman-codes/school-bus-api",
      "https://github.com/godman-codes/school-bus-api",
   ],
};

const Home = () => {
   const about = useRef(null);
   const portfolio = useRef(null);
   const contact = useRef(null);

   const handleClick1 = () => {
      about.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };
   const handleClick2 = () => {
      portfolio.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };
   const handleClick3 = () => {
      contact.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };

   return (
      <>
         <Navbar
            callback1={handleClick1}
            callback2={handleClick2}
            callback3={handleClick3}
         />
         <ProfilePicture image={Profile} text="Godman profile picture" />
         <Infobar />
         <Subtopic index="01" subTopic="About Me" />
         <div ref={about}>
            <Infobar2 />
         </div>
         <br />
         <div ref={portfolio}>
            <Subtopic index="02" subTopic="My Work" />
            <MyWorks project={PLTSAPP} />
            <br />
            <MyWorks project={movieDb} />
            <br />
            <MyWorks project={cashAttendanceApp} />
            <br />
            <MyWorks project={schoolBusAPi} />
            <br />
         </div>
         <br />
         <Subtopic index="03" subTopic="Contact Your Mans" />
         <div ref={contact}>
            <Contacts />
         </div>
         <br />
         <br />
      </>
   );
};
export default Home;
