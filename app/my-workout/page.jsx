"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MyWorkout() {
  const response = useSelector((state) => state.routine);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (response !== null) {
      setLoading(false);
    }
  }, [response]);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <div>
        <div>
          <h3>Introduction</h3>
          <p>{response.introduction}</p>
        </div>
        <div>
          <h3>Equipment needed</h3>
          {response.equipment.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <h3>Workout response</h3>
          {days.map((day) => (
            <h4 key={day}>{day}</h4>
          ))}
          {response.routine.mon.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <h3>Advice</h3>
          <p>{response.advice}</p>
        </div>
      </div>
    );
  }

  // return (
  //   <div>
  //     {response === null ? (
  //       <p>loading...</p>
  //     ) : (
  //       <div>
  //         <h3>Introduction</h3>
  //         <p>{response.introduction}</p>
  //         <h3>Equipment needed</h3>
  //         {response.equipment.map((item) => (
  //           <p>{item}</p>
  //         ))}
  //         <h3>Workout response</h3>
  //         <h4>Monday</h4>
  //         {response.routine.mon.map((item) => (
  //           <p>{item}</p>
  //         ))}
  //         <h3>Advice</h3>
  //         <p>{response.advice}</p>
  //       </div>
  //     )}
  //   </div>
  // );
}
