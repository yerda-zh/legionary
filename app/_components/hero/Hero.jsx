'use client'
import { HeroContainer, ContentDiv, Block } from "./hero.styles";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bg from '../../../public/bg1.jpg';
import { useEffect, useState } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter();

  return (
    <HeroContainer>
      <Block style={{transform: `translateY(${ offsetY * 0.3}px)`}}/>
      <Image src={bg} alt="background" fill placeholder="blur" style={{objectFit: 'cover', zIndex: -2, transform: `translateY(${ offsetY * 0.4}px)`}}/>
      <ContentDiv>
        <h1>Welcome to Legionary,</h1>
        <p>website designed to create personalized workout routines</p>
        <h3>Unleash Your Potential with AI-Powered Fitness!</h3>
        <div>
          <button onClick={()=>router.push('/create-workout')}><span>Create a workout routine</span></button>
        </div>
      </ContentDiv>
    </HeroContainer>
  );
}

export default Hero;