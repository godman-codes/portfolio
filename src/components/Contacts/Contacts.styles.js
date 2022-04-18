import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: start;
   }
   #icon-div {
      display: flex;
      flex-direction: row;
      width: 50%;
      justify-content: space-around;
      @media screen {
         width: 100%;
         padding: 30px 0;
         justify-content: space-evenly;
      }
   }
   .icons {
      height: 40px;
      font-size: larger;
      color: white;
      padding-left: 20px;
      :hover {
         transform: scale(1.4);
      }
   }
`;
