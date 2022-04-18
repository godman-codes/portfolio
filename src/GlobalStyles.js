import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
   --maxWidth: 1280px; 
   --fontSuperBig: 2.5rem;
   --fontBig: 1.5rem;
   --fontMed: 1.2rem;
   --fontSmall: 1rem;
}

*{
   box-sizing: border-box;
   font-family: 'Abel', sans-serif;
}

body {
   margin: 0;
   padding: 0;
   
   h1 {
      font-size: 2rem;
      font-weight: 600;
   }
   
   h3 {
      font-size: 1.1rem;
      font-weight: 600;
   }

   p{
      font-size: 1rem;
   }
}
`;
