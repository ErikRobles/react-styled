import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedinIn />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
