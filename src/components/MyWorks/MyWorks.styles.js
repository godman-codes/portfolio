import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(255, 255, 255, 0.2);
   border-radius: 10px;
   box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.5);
   :hover {
      transform: scale(1.03);
   }
`;
export const Content = styled.div`
   height: 100%;
   padding: 25px;
   p {
      padding: 5px 0;
   }
   #tech-div {
      padding: 15px 0;
   }
   #logo-div {
      padding: 15px 0;
   }
   .icon {
      color: white;
      font-size: larger;
      margin-right: 20px;
      height: 30px;
   }
`;
