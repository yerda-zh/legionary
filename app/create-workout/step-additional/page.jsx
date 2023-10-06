"use client";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { updateValue } from "@/app/redux/additionalSlice";
import { setRoutine } from "@/app/redux/routineSlice";

export default function StepAdditional() {
  const router = useRouter();
  const dispatch = useDispatch();
  const additional = useSelector((state) => state.additional);
  const answers = useSelector((state) => state.answers);

  const handleHeightChange = (e) => {
    dispatch(updateValue({ index: 0, howmany: 1, item: e.target.value })); // Update the state with the input value
  };
  const handleWeightChange = (e) => {
    dispatch(updateValue({ index: 1, howmany: 1, item: e.target.value })); // Update the state with the input value
  };

  const handleNextButton = () => {
    if (additional[0] && additional[1]) {
      if(answers.length !== 0) {
        fetch("http://localhost:5000/test", {
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
        
        router.push("/my-workout");
      }
    }
  };

  return (
    <div>
      <h3>What's your height? (cm)</h3>
      <input onChange={handleHeightChange} />
      <h3>What's your current weight?</h3>
      <input onChange={handleWeightChange} />
      <button onClick={handleNextButton}>next</button>
    </div>
  );
}
