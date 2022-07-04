import styled from "styled-components";

export const Wrapper = styled.div`
   .form-error {
      color: red;
      font-weight: bolder;
   }
   label {
      padding-bottom: 5px;
   }
   input {
      margin: 2px solid white;
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid;
      border-radius: 3px;
      border-style: outset;
      color: white;
      width: 200px;
      height: 30px;
      padding-bottom: 10px;
      ::placeholder {
         color: white;
         font-size: auto;
         padding-left: 2px;
      }
   }
   textarea {
      margin: 2px solid white;
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid;
      border-radius: 3px;
      border-style: outset;
      color: white;
      width: 200px;
      padding-bottom: 15px;
      ::placeholder {
         color: white;
         font-size: 100%;
         padding-left: 2px;
      }
   }
   .button {
      border: 2px solid #4a9a7e;
      background-color: #4a9a7e;
      color: white;
      height: 50px;
      width: 100px;
      font-size: auto;
      font-weight: bold;
      :hover {
         color: white;
         background: #76f7cb;
      }
   }
`;
