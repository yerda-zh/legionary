"use client";
import { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WorkoutRoutineDiv, FirstDiv, EquipmentDiv, LevelIndicator, DefaultContainer, WorkoutContainer, BMICircle } from "./mw.styles";
import { bmiCategories } from "../_constants/constants";
import { useRouter } from "next/navigation";

export default function MyWorkout() {
  const user = useSelector((state) => state.user);
  const fetching = useSelector((state) => state.fetching);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();
  
  // used to display as header for each day and dynamically map over received exercises
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const updateCategoryAndDescription = (bmi) => {
    if (bmi < 18.5) {
      setCategory(bmiCategories[0].category);
      setDescription(bmiCategories[0].description);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory(bmiCategories[1].category);
      setDescription(bmiCategories[1].description);
    } else if (bmi >= 25 && bmi <= 29.9) {
      setCategory(bmiCategories[2].category);
      setDescription(bmiCategories[2].description);
    } else if (bmi >= 30 && bmi <= 34.9) {
      setCategory(bmiCategories[3].category);
      setDescription(bmiCategories[3].description);
    } else if (bmi >= 35 && bmi <= 40) {
      setCategory(bmiCategories[4].category);
      setDescription(bmiCategories[4].description);
    } else if (bmi > 40) {
      setCategory(bmiCategories[5].category);
      setDescription(bmiCategories[5].description);
    } else {
      setCategory('');
      setDescription('');
    }
  }

  useEffect(() => {
    updateCategoryAndDescription(user.bmi);
  }, [user.bmi]);

  const handleSaveButton = async () => {
    setMessage('');

    try {
      const response = await fetch("http://localhost:5000/save", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          bmi: user.bmi,
          routine: user.routine
        }),
      });

      if(response.status === 400) {
        setMessage('There was an issue, try again');
      } else {
        const result = await response.json();
        setMessage(result);
      }
    } catch (error) {
      setMessage('There was an issue, try again');
      console.log(error);
    }
  };

  if (fetching) {
    return <p>loading...</p>
  } else if(!fetching && !user.routine) {
    return (
      <DefaultContainer>
        <h2>It looks like you haven't set up any workout routines yet.</h2>
        <p>To begin creating your personalized workout routine, simply navigate <span onClick={()=>router.push('/create-workout')}>here</span></p>
      </DefaultContainer>
    )
  } else {
    return (
      <WorkoutContainer>
        <h2>My Workout Plan</h2>
        <p>{user.routine.introduction}</p>

        <FirstDiv>
          <EquipmentDiv>
            <h3>Equipment Needed</h3>
            <ul>
              {user.routine.equipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </EquipmentDiv>

          <LevelIndicator>
            <BMICircle $level = {user.bmi}/>
          </LevelIndicator>

          <div>
            <h3 className="bmi">{`Your BMI is: ${user.bmi}`}</h3>
            <p className="category">{category}</p>
            <p>{description}</p>
          </div>
          
        </FirstDiv>
        
        <h3>Routine</h3>
        <WorkoutRoutineDiv>
          {days.map((day) => (
            <div className="oneDay" key={day}>
              <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
              {user.routine.routine[day].map((exercise) => (
                <p className="exercise" key={exercise}>{exercise}</p>
              ))}
            </div>
          ))}
        </WorkoutRoutineDiv>
        
        <h3>Advice</h3>
        <p>{user.routine.advice}</p>

        <button onClick={handleSaveButton}>save</button>
        {message && <p>{message}</p>}
      </WorkoutContainer>
    )
  }
}
