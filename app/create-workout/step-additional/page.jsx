'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function StepAdditional() {
    const [height, setHeight] = useState();
    const [currentWeight, setCurrentWeight] = useState();
    const [targetWeight, setTargetWeight] = useState();
    const router = useRouter();

    const handleHeightChange = (e) => {
      setHeight(e.target.value); // Update the state with the input value
    };
    const handleCurrentWeightChange = (e) => {
      setCurrentWeight(e.target.value); // Update the state with the input value
    };
    const handleTargetWeightChange = (e) => {
      setTargetWeight(e.target.value); // Update the state with the input value
    };
    const handleNextButton = () => {
        console.log(height, currentWeight, targetWeight);
        router.push('/my-workout');
    }

    return (
        <div>
            <h3>
                What's your height? (cm)
            </h3>
            <input onChange={handleHeightChange}/>
            <h3>
                What's your current and target weight?
            </h3>
            <label>Current Weight (kg)</label>
            <input onChange={handleCurrentWeightChange}/>
            <label>Target Weight (kg)</label>
            <input onChange={handleTargetWeightChange}/>
            <button onClick={handleNextButton}>next</button>
        </div>
    )
}