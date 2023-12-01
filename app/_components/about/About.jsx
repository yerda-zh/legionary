"use client";
import { AboutContainer, RowContainer, ImageContainer, Block1, Block2, ContentDiv } from "./about.styles";
import Image from "next/image";
import { useState, useEffect } from "react";
import About1 from '../../../public/about1.jpg';
import About6 from '../../../public/about6.jpg';
import { useInView } from "react-intersection-observer";
import '../../_animations/animations.scss';

const About = () => {
  const {ref: img1Ref, inView: isImg1Visible} = useInView();
  const {ref: content1Ref, inView: isContent1Visible} = useInView();
  const {ref: img2Ref, inView: isImg2Visible} = useInView();
  const {ref: content2Ref, inView: isContent2Visible} = useInView();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AboutContainer>
      <RowContainer>
        <ImageContainer>
          <Image ref={img1Ref} className={`${isImg1Visible ? 'slide-right-2' : ''}`}  src={About1} sizes="100%" alt="about1" fill placeholder="blur" style={{objectFit: 'cover', zIndex: 1}}/>
          <Block1 style={{transform: `translateY(${ offsetY * 0.1}px)`}}/>
        </ImageContainer>
        <ContentDiv ref={content1Ref} className={`${isContent1Visible ? 'slide-left' : ''}`}>
          <h2>Future of Fitness: AI-Powered Workout Routine</h2>
          <p>
            In the fast-paced world of fitness, staying motivated and achieving
            your fitness goals can be a challenging task. But what if you had a
            personal fitness expert by your side, creating workout
            routines tailored to your unique needs and goals? That's where our
            AI-powered workout routine platform comes in.
          </p>
        </ContentDiv>
      </RowContainer>

      <RowContainer>
        <ContentDiv ref={content2Ref} className={`${isContent2Visible ? 'slide-right-2' : ''}`}>
          <h2>The Power of AI in Fitness</h2>
          <p>
            Our platform harnesses the incredible capabilities of artificial
            intelligence to revolutionize the way you approach your fitness
            journey. With AI, we've made it easier than ever to access
            personalized workout routines that are not only effective but also
            enjoyable.
          </p>
        </ContentDiv>
        <ImageContainer>
          <Image ref={img2Ref} className={`${isImg2Visible ? 'slide-left' : ''}`}  src={About6} sizes="100%" alt="about1" fill placeholder="blur" style={{objectFit: 'cover', zIndex: 1}}/>
          <Block2 style={{transform: `translateY(${ offsetY * 0.1}px)`}}/>
        </ImageContainer>
      </RowContainer>
    </AboutContainer>
  );
};

export default About;
