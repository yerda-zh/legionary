"use client";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function MyWorkout() {
  const answers = useSelector((state) => state.answers);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  fetch("http://localhost:5000/chat", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      answers: answers,
    }),
  })
    .then((res) => res.json())
    .then((answers) => {
      setResult(answers.data);
      setLoading(false);
    })
    .catch(console.log);

  return <div>{loading ? <p>Loading...</p> : <p>{result}</p>}</div>;
}
