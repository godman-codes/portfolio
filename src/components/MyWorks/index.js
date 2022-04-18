import React from "react";
import { Wrapper, Content } from "./MyWorks.styles";

const MyWorks = ({ header, paragraph }) => {
   return (
      <Wrapper>
         <Content>
            <h1>{header}</h1>
            <p>{paragraph}</p>
         </Content>
      </Wrapper>
   );
};
export default MyWorks;
