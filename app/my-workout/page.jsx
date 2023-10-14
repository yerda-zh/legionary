"use client";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function MyWorkout() {
  const routine = useSelector((state) => state.routine);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <pre>{routine === null ? <p>loading</p> : routine}</pre>
      {console.log(routine)}
    </div>
  );
}
