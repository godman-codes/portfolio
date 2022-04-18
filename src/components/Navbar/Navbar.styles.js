import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 5px 0;
   height: 70px;
`;
export const Content = styled.div`
   display: flex;
   height: 100%;
   align-items: center;
   justify-content: space-between;
   .action-nav {
      display: flex;
      justify-content: space-evenly;
      width: 60%;
   }
   #resume {
      background-color: #0d403c;
      color: #76f7cb;
      border-radius: 5px;
      :hover {
         transform: scale(1.05);
         color: #c7ffed;
      }
   }
   #logo {
      padding: 7px;
   }
   p {
      cursor: pointer;
      font-size: var(--fontMed);
      padding: 7px;
   }
   @media screen and (max-width: 970px) {
      .hide {
         display: none;
      }
      .action-nav {
         justify-content: right;
      }
   }
`;
