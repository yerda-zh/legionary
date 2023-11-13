'use client'
import { FooterContainer, InfoDiv, RightsDiv } from "./footer.styles";
import {BsLinkedin} from 'react-icons/bs';
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <FooterContainer>
      <InfoDiv>
        <p className="logo">LEGIONARY</p>
        <h5>Revolutionizing the fitness world with the power of AI</h5>
        <p className="contact" onClick={()=>router.push('https://www.linkedin.com/in/yerdaulet-zh/')}>
            <BsLinkedin/>Contact          
        </p>
      </InfoDiv>

      <RightsDiv>
        <p>© 2023 Legionary. All Rights Reserved.</p>
      </RightsDiv>
    </FooterContainer>
  );
}

export default Footer