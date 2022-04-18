import React from "react";
import { Wrapper, Picture } from "./ProfilePicture.styles";

const ProfilePicture = ({ image }) => {
   return (
      <Wrapper>
         <Picture src={image} alt="Godman" />
      </Wrapper>
   );
};
export default ProfilePicture;
