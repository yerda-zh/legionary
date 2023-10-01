'use client'
import { HeroContainer } from "./hero.styles";
import Link from 'next/link'

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h1>Welcome to Legionary,</h1>
        <p>a website designed to create personalized workout routines</p>
        <h3>Unleash Your Potential with AI-Powered Fitness!</h3>
        <Link href='/create-workout'><button>Create a workout routine</button></Link>
      </div>
      <div>
        <h1>*HERO IMG*</h1>
      </div>
    </HeroContainer>
  );
}

export default Hero;