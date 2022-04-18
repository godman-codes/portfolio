import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
   --maxWidth: 1280px; 
   --fontSuperBig: 2.5rem;
   --fontBig: 1.5rem;
   --fontMed: 1.2rem;
   --fontSmall: 1rem;
}

*{
   box-sizing: border-box;
   font-family: 'Nunito Sans', sans-serif;
   margin: 0;
}

body {
   margin: 0;
   color: white;
   padding: 0 15%;
   background: hsla(159, 35%, 45%, 1);
   background: linear-gradient(180deg, hsla(159, 35%, 45%, 1) 0%, hsla(176, 68%, 12%, 1) 100%);
   background: -moz-linear-gradient(180deg, hsla(159, 35%, 45%, 1) 0%, hsla(176, 68%, 12%, 1) 100%);
   background: -webkit-linear-gradient(180deg, hsla(159, 35%, 45%, 1) 0%, hsla(176, 68%, 12%, 1) 100%);
   filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4A9B7F", endColorstr="#0A3431", GradientType=1 );
   
   h1 {
      font-size: 2rem;
      color: white;
   }
   
   h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: white;
   }
   @font-face {
      font-family: 'Nunito Sans';
      src: url(Nunito_sans/NunitoSans-Regular.ttf);
   }

   p{
      font-size: 1rem;
      color: white;
   }
   @media screen and (max-width: 900px) {
      padding: 0 5%;
      h1 {
      font-size: 1.7rem;
   }
   
   h3 {
      font-size: 1.0rem;
      
   }
   p{
      font-size: 0.9rem;
   }
   }
   @media screen and (max-width: 768px) {
      padding: 0 3%;
      h1 {
      font-size: 1.4rem;
   }
   
   h3 {
      font-size: 1.0rem;
      
   }
   p{
      font-size: 0.9rem;
   }
   }
}
`;
