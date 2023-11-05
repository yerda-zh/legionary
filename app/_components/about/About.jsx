"use client";
import { MainAboutContainer } from "./about.styles";

const About = () => {
  return (
    <div id="about" style={{background: 'black', color: 'white'}}>
      <br />
      <MainAboutContainer>
        <div>
          <h1>*SOME IMG*</h1>
        </div>
        <div>
          <h2>Future of Fitness: AI-Powered Workout Routine</h2>
          <p>
            In the fast-paced world of fitness, staying motivated and achieving
            your fitness goals can be a challenging task. But what if you had a
            personal fitness expert by your side, creating customized workout
            routines tailored to your unique needs and goals? That's where our
            AI-powered workout routine creation platform comes in.
          </p>
        </div>
      </MainAboutContainer>
      <br />
      <MainAboutContainer>
        <div>
          <h2>The Power of AI in Fitness</h2>
          <p>
            Our platform harnesses the incredible capabilities of artificial
            intelligence to revolutionize the way you approach your fitness
            journey. With AI, we've made it easier than ever to access
            personalized workout routines that are not only effective but also
            enjoyable.
          </p>
        </div>
        <div>
          <h1>*SOME IMG*</h1>
        </div>
      </MainAboutContainer>
      <br />
      <div>
        <h2>Why Choose AI-Powered Workouts?</h2>
        <MainAboutContainer>
          <div>
            <h4>Personalizion</h4>
            <p>
              AI considers your unique needs, making your workouts more
              effective and enjoyable.
            </p>
          </div>
          <div>
            <h4>Efficiency</h4>
            <p>
              Say goodbye to hours spent searching for the perfect routine. Our
              AI does the heavy lifting for you.
            </p>
          </div>
          <div>
            <h4>Motivation</h4>
            <p>
              With ever-evolving workouts and achievable goals, you'll stay
              motivated and eager to hit the gym.
            </p>
          </div>
          <div>
            <h4>Results</h4>
            <p>
              AI's precision ensures you get results faster, helping you achieve
              your fitness goals.
            </p>
          </div>
        </MainAboutContainer>
      </div>
    </div>
  );
};

export default About;
