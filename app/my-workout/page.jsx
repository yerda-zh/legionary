"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WorkoutRoutineDiv, InfoDiv } from "./mw.styles";
import { bmiCategories } from "../_constants/constants";

export default function MyWorkout() {

  const user = useSelector((state) => state.user);
  const fetching = useSelector((state) => state.fetching);
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
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

  useEffect(() => {
    // use switch !!!!
    if (user.bmi < 18.5) {
      setCategory(bmiCategories[0].category);
      setDescription(bmiCategories[0].description);
    } else if (user.bmi >= 18.5 && user.bmi <= 24.9) {
      setCategory(bmiCategories[1].category);
      setDescription(bmiCategories[1].description);
    } else if (user.bmi >= 25 && user.bmi <= 29.9) {
      setCategory(bmiCategories[2].category);
      setDescription(bmiCategories[2].description);
    } else if (user.bmi >= 30 && user.bmi <= 34.9) {
      setCategory(bmiCategories[3].category);
      setDescription(bmiCategories[3].description);
    } else if (user.bmi >= 35 && user.bmi < 39.9) {
      setCategory(bmiCategories[4].category);
      setDescription(bmiCategories[4].description);
    } else if (user.bmi >= 40) {
      setCategory(bmiCategories[5].category);
      setDescription(bmiCategories[5].description);
    } else {
      setCategory('');
      setDescription('');
    }
  }, [user]);

  const handleSaveButton = () => {
    fetch("http://localhost:5000/save", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        bmi: user.bmi,
        routine: user.routine
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response);
      })
      .catch(console.log);
  };

  if (fetching) {
    return <p>loading...</p>
  } else if(!fetching && !user.routine) {
    return <p>no data</p>
  } else {
    return (
      <div>
        <div>
          <h3>Introduction</h3>
          <p>{user.routine.introduction}</p>
        </div>
        <InfoDiv>
          <div>
            <h3>Equipment Needed</h3>
            {user.routine.equipment.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <h3>{`Your BMI is: ${user.bmi}`}</h3>
          <p>{category}</p>
          <p>{description}</p>
        </InfoDiv>
        <div>
          <h3>Workout Routine</h3>
          <WorkoutRoutineDiv>
            {days.map((day) => (
              <div key={day}>
                <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
                {user.routine.routine[day].map((exercise) => (
                  <p key={exercise}>{exercise}</p>
                ))}
              </div>
            ))}
          </WorkoutRoutineDiv>
        </div>
        <div>
          <h3>Advice</h3>
          <p>{user.routine.advice}</p>
        </div>
        <button onClick={handleSaveButton}>save</button>
      </div>
    )
  }
}
