import styled from "styled-components";

export const Wrapper = styled.div`
   padding-bottom: 100px;
`;
export const Content = styled.div`
   #job {
      animation: data 2s;

      @keyframes data {
         from {
            opacity: 0;
         }
         to {
            opacity: 1;
         }
      }
   }
`;
