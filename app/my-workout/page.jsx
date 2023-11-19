"use client";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WorkoutRoutineDiv, FirstDiv, EquipmentDiv, LevelIndicator, DefaultContainer, RoutineContainer, WorkoutContainer, LeftButton, RightButton, BMICircle } from "./mw.styles";
import { bmiCategories } from "../_constants/constants";
import { useRouter } from "next/navigation";
import { trio } from 'ldrs';

export default function MyWorkout() {
  trio.register();
  const router = useRouter();

  const user = useSelector((state) => state.user);
  const fetching = useSelector((state) => state.fetching);

  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [leftArrow, setleftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);

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

  const routineContainerRef = useRef(null);
  const container = routineContainerRef.current;

  const scrollLeft = () => {
    if (container) {
      const elementWidth = container.querySelector('.oneDay').offsetWidth;
      container.scrollLeft -= elementWidth;
      setRightArrow(true);

      if (container.scrollLeft < 10) {
        setleftArrow(false);
      }
    }
  };

  const scrollRight = () => {
    if (container) {
      const elementWidth = container.querySelector('.oneDay').offsetWidth;
      container.scrollLeft += elementWidth;
      setleftArrow(true);

      if (container.scrollLeft + 10 > container.scrollWidth-container.clientWidth) {
        setRightArrow(false);
      }
    }
  };

  if (fetching) {
    return (
      <div style={{width: "100%", height: "90dvh", display: "flex", justifyContent: "center", alignItems: "center",}}>
        <l-trio size="55" speed="1.3" color="var(--color-accent)"/>
      </div>
    );
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
            <BMICircle $level={user.bmi} />
            <div>
              <h3 className="bmi">{`Your BMI is: ${user.bmi}`}</h3>
              <p className="category">{category}</p>
              <p>{description}</p>
            </div>
          </LevelIndicator>
        </FirstDiv>

        <h3>Routine</h3>
        <RoutineContainer>
          <WorkoutRoutineDiv ref={routineContainerRef}>
            {days.map((day) => (
              <div className="oneDay" key={day}>
                <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
                {user.routine.routine[day].map((exercise) => (
                  <p className="exercise" key={exercise}>
                    {exercise}
                  </p>
                ))}
              </div>
            ))}
          </WorkoutRoutineDiv>
          {leftArrow && <LeftButton onClick={scrollLeft}/>}
          {rightArrow && <RightButton onClick={scrollRight}/>}
        </RoutineContainer>

        <h3>Advice</h3>
        <p>{user.routine.advice}</p>

        {message && <p className="message">{message}</p>}
        <button onClick={handleSaveButton}>save</button>
      </WorkoutContainer>
    );
  }
}
