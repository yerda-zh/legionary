'use client'
import { FooterContainer, FooterInfoContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <br />
      <FooterInfoContainer>
        <div>Logo</div>
        <div>
          <h5>Revolutionizing the fitness world with the power of AI. </h5>
          <p>
            Contact: <span>yerdaulet.04@gmail.com</span>
          </p>
        </div>
      </FooterInfoContainer>
      <div>
        <p>© 2023 Legionary. All Rights Reserved.</p>
      </div>
    </FooterContainer>
  );
}

export default Footer