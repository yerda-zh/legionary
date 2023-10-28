"use client";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setRoutine, setBmi } from "@/app/redux/userSlice";
import { useState } from "react";
import { setFetching } from "@/app/redux/fetchingSlice";
import { resetAnswer } from "@/app/redux/answersSlice";

export default function StepAdditional() {
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
          const response = await fetch("http://localhost:5000/chat", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              answers: answers,
            }),
          });

          dispatch(resetAnswer());

          if(response.status === 400) {
            alert("There was an issue, please try again");
          } else {
            const routine = await response.json();
            dispatch(setRoutine(routine.data));
          }
          
          dispatch(setFetching(false));
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <div>
      <h3>What's your height? (cm)</h3>
      <input type="number" value={height} onChange={handleHeightChange} />
      <h3>What's your current weight? (kg)</h3>
      <input type="number" value={weight} onChange={handleWeightChange} />
      <button onClick={handleNextButton}>next</button>
    </div>
  );
}
