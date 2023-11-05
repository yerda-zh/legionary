'use client'
import { HeroContainer, ContentDiv, Block, Background } from "./hero.styles";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bg from '../../../public/bg1.jpg';

const Hero = () => {
  const router = useRouter();

  return (
    <HeroContainer>
      <Block/>
      <Image src={bg} alt="background" fill placeholder="blur" style={{objectFit: 'cover', zIndex: -2}}/>
      <ContentDiv>
        <h1>Welcome to Legionary,</h1>
        <p>a website designed to create personalized workout routines</p>
        <h3>Unleash Your Potential with AI-Powered Fitness!</h3>
        <div>
          <button onClick={()=>router.push('/create-workout')}><span>Create a workout routine</span></button>
        </div>
      </ContentDiv>
    </HeroContainer>
  );
}

export default Hero;