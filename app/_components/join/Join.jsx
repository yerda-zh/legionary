'use client'
import { JoinContainer } from "./join.styles";
import Link
 from "next/link";
const Join = () => {
  return (
    <JoinContainer>
      <div>
        <h2>Why Choose AI-Powered Workouts?</h2>
        <div>
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
        </div>
      </div>
      <h2>Join the Fitness Revolution</h2>
      <p>
        Get started today and experience the transformation for yourself.
        Welcome to a new era of fitness where your goals are just a click away,
        powered by the intelligence of tomorrow.
      </p>
      <Link href="/create-workout">
        <button>Create a workout routine</button>
      </Link>
    </JoinContainer>
  );
}

export default Join;