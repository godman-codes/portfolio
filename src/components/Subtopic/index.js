import React from "react";
import { Content } from "./Subtopic.styles";

const Subtopic = ({ index, subTopic }) => {
   return (
      <Content>
         <h1>
            <span>{index}. </span>
            {subTopic}
         </h1>
      </Content>
   );
};
export default Subtopic;
