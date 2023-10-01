'use client'
import { JoinContainer } from "./join.styles";
import Link
 from "next/link";
const Join = () => {
  return (
    <JoinContainer>
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