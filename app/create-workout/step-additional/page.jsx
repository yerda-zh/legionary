"use client";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { updateBmi } from "@/app/redux/additionalSlice";
import { setRoutine } from "@/app/redux/routineSlice";
import { useState } from "react";

export default function StepAdditional() {
  const router = useRouter();
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const handleHeightChange = (e) => {
    setHeight(e.target.value); // Update the state with the input value
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value); // Update the state with the input value
  };

  const handleNextButton = () => {
    if (height && weight) {
      // check whether the answers array is empty or not
      if(answers.length !== 0) {
        fetch("http://localhost:5000/chat", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: answers,
        }),
      })
        .then((res) => res.json())
        .then((answers) => {
          dispatch(setRoutine(answers.data));
        })
        .catch(console.log);
        
        const squareHight = height * height / 10000;
        const bmiValue = weight / squareHight;
        dispatch(updateBmi(bmiValue.toFixed(1)));
        
        router.push("/my-workout");
      }
    }
  };

  return (
    <div>
      <h3>What's your height? (cm)</h3>
      <input type="number" onChange={handleHeightChange} />
      <h3>What's your current weight? (kg)</h3>
      <input type="number" onChange={handleWeightChange} />
      <button onClick={handleNextButton}>next</button>
    </div>
  );
}
