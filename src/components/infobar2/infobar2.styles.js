import styled from "styled-components";

export const Wrapper = styled.div`
   p {
      padding: 10px 0;
   }
   #stack {
      display: flex;
      flex-direction: row;
      width: 500px;
      justify-content: space-between;
   }
   #first-list {
      margin-left: 20px;
      padding: 0;
   }
   #second-list {
      /* padding-left: 50px; */
   }
   @media screen and (max-width: 768px) {
      #stack {
         width: 300px;
         justify-content: space-between;
      }
   }
`;
