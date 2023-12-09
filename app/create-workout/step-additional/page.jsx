"use client";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setRoutine, setBmi, resetRoutine } from "@/app/redux/userSlice";
import { useState } from "react";
import { setFetching } from "@/app/redux/fetchingSlice";
import { resetAnswer } from "@/app/redux/answersSlice";
import {AdditionalDiv} from './additional.styles';
import { ButtonGrey } from "@/app/_components/buttons/Button";

export function getInitialProps() {
  return {
    props: {}, // Optional props to pass to the page
  };
}

export default function StepAdditional({ props }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightChange = (e) => {
    setHeight(e.target.value); // Update the state with the input value
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value); // Update the state with the input value
  };

  const handleNextButton = async () => {
    if (height && weight) {
      dispatch(setFetching(true));
      router.push("/my-workout");

      const squareHight = height * height / 10000;
      const bmiValue = weight / squareHight;
      dispatch(setBmi(bmiValue.toFixed(1)));

      if(answers.length === 9) {
        try {
          dispatch(resetRoutine());
          dispatch(resetAnswer());
          
          const response = await fetch("https://legionary-api.onrender.com/chat", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              answers: answers,
            }),
          });


          if(response.status === 200) {
            const routine = await response.json();

            dispatch(setRoutine(routine.data));
            dispatch(setFetching(false));
          } else {
            dispatch(setFetching(false));
            alert("There was an issue, please try again");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <AdditionalDiv>
      <h3>What is your height? (cm)</h3>
      <input type="number" value={height} onChange={handleHeightChange} placeholder="Enter your height"/>
      <h3>What is your current weight? (kg)</h3>
      <input type="number" value={weight} onChange={handleWeightChange} placeholder="Enter your weight"/>
      <ButtonGrey onClick={handleNextButton}>next</ButtonGrey>
    </AdditionalDiv>
  );
}
