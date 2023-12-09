"use client";
import { JoinContainer, WhyContainer, FeaturesContainer, FeatureDiv, JoinDiv } from "./join.styles";
import { useRouter } from "next/navigation";
import {BsFillPersonFill} from 'react-icons/bs';
import {BiSolidTimer} from 'react-icons/bi';
import {AiFillTrophy} from 'react-icons/ai';
import {PiTargetBold} from 'react-icons/pi';
import { useInView } from "react-intersection-observer";
import '../../_animations/animations.scss';

const Join = () => {
  const {ref: featureRef, inView: isFeatureVisible} = useInView();

  const router = useRouter();

  return (
    <JoinContainer>
      <WhyContainer>
        <h2>Why Choose AI-Powered Workouts?</h2>
        <FeaturesContainer ref={featureRef}>
          <FeatureDiv className={`${isFeatureVisible ? 'slide-left-first' : ''}`}>
            <div>
                <h4>Personalization</h4>
                <BsFillPersonFill className="featureLogo"/>
            </div>
            <p>
              AI considers your unique needs, making your workouts more
              effective and enjoyable.
            </p>
          </FeatureDiv>
          <FeatureDiv className={`${isFeatureVisible ? 'slide-left-second' : ''}`}>
            <div>
              <h4>Efficiency</h4>
              <BiSolidTimer/>
            </div>
            <p>
              Say goodbye to hours spent searching for the perfect routine. Our
              AI does the heavy lifting for you.
            </p>
          </FeatureDiv>
          <FeatureDiv className={`${isFeatureVisible ? 'slide-left-third' : ''}`}>
            <div>
              <h4>Motivation</h4>
              <AiFillTrophy/>
            </div>
            
            <p>
              With ever-evolving workouts and achievable goals, you will stay
              motivated and eager to hit the gym.
            </p>
          </FeatureDiv>
          <FeatureDiv className={`${isFeatureVisible ? 'slide-left-forth' : ''}`}>
            <div>
              <h4>Results</h4>
              <PiTargetBold/>
            </div>
            <p>
              AI&apos;s precision ensures you get results faster, helping you achieve
              your fitness goals.
            </p>
          </FeatureDiv>
        </FeaturesContainer>
      </WhyContainer>

      <JoinDiv>
        <h2>Join the Fitness Revolution</h2>
        <p>
          Get started today and experience the transformation for yourself.
          Welcome to a new era of fitness where your goals are just a click
          away, powered by the intelligence of tomorrow.
        </p>
        <div>
          <button onClick={() => router.push("/create-workout")}>
            Get Started
          </button>
        </div>
      </JoinDiv>
    </JoinContainer>
  );
};

export default Join;
