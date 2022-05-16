import React from "react";
import { Wrapper, Content } from "./MyWorks.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MyWorks = ({ project }) => {
   return (
      <Wrapper>
         <Content>
            <h1>{project.header}</h1>
            <p>{project.paragraph}</p>
            <div id="tech-div">
               {project.technologies.map((tech, i) => (
                  <span className="tech" key={i}>
                     {tech}
                  </span>
               ))}
            </div>
            <div id="logo-div ">
               <a
                  href={project.extLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
               </a>
               <a
                  href={project.extLinks[1]}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon icon={faLink} className="icon" />
               </a>
            </div>
         </Content>
      </Wrapper>
   );
};
export default MyWorks;
