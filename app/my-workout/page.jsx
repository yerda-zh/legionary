"use client";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function MyWorkout() {
  const response = useSelector((state) => state.routine);
  const [loading, setLoading] = useState(true);
  // if (response !== null) {
  //   setLoading(false);
  // }
  return (
    <div>
      {response === null ? (
        <p>loading...</p>
      ) : (
        <div>
          <h3>Introduction</h3>
          <p>{response.introduction}</p>
          <h3>Equipment needed</h3>
          {response.equipment.map((item) => (
            <p>{item}</p>
          ))}
          <h3>Workout response</h3>
          <h4>Monday</h4>
          {response.routine.mon.map((item) => (
            <p>{item}</p>
          ))}
          <h3>Advice</h3>
          <p>{response.advice}</p>
        </div>
      )}
    </div>
  );
}
