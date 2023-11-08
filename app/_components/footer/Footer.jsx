'use client'
import { FooterContainer, InfoDiv, RightsDiv } from "./footer.styles";
import {IoMdMail} from 'react-icons/io';

const Footer = () => {
  return (
    <FooterContainer>
      <InfoDiv>
        <p className="logo">LEGIONARY</p>
        <h5>Revolutionizing the fitness world with the power of AI</h5>
        <p className="contact">
          <IoMdMail/>Contact: <span>yerdaulet.04@gmail.com</span>
        </p>
      </InfoDiv>

      <RightsDiv>
        <p>© 2023 Legionary. All Rights Reserved.</p>
      </RightsDiv>
    </FooterContainer>
  );
}

export default Footer