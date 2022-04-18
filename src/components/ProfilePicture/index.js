import React from "react";
import { Wrapper, Picture } from "./ProfilePicture.styles";

const ProfilePicture = ({ image, text }) => {
   return (
      <Wrapper>
         <Picture src={image} alt={text} />
      </Wrapper>
   );
};
export default ProfilePicture;
