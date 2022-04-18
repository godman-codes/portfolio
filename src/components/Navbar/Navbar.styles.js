import styled from "styled-components";

export const Wrapper = styled.div`
   /* border: 2px red solid; */
   height: 50px;
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
   #logo {
      /* padding-left: 15px; */
   }
   p {
      font-size: var(--fontMed);
   }
`;
