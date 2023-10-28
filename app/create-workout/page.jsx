"use client";
import { useState } from "react";
import { OptionDiv } from "./cw.styles";
import { sex, questionsMale, questionsFemale } from "../_constants/constants";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { addAnswer, updateAnswer } from "../redux/answersSlice";

export default function CreateWorkout() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null); // used for dynamic styling and building the answers set
  const [questionsArray, setQuestionsArray] = useState(sex);

  const router = useRouter();
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answers); // used to make server requests
  const user = useSelector((state) => state.user);

  const handleNextButton = () => {

    if (choice) {
      setIndex((prevIndex) => prevIndex + 1); // incrementing index by 1 so that the question set would change to the next one
      
      answers[index] || answers[index] === choice
        ? dispatch(updateAnswer({ index, howmany: 1, item: choice }))
        : dispatch(addAnswer(choice));
      // if user already chose one option before, the currenly chosen choice replaces the old one, otherwise the option gets added
      // to the answers set

      if (index > 0 && index === questionsArray.length - 1) {
        return router.push("/create-workout/step-additional");
      } else {
        setChoice(answers[index + 1]); // setting choice to next questions already chosen option if it exists
      } // push router to the next if the questions were finished

      answers[0] === "Male"
        ? setQuestionsArray(questionsMale)
        : setQuestionsArray(questionsFemale);
      // changes the question set based on the first answer
    }
  };
  const handleBackButton = () => {
    setIndex((prevIndex) => prevIndex - 1); // decrementing index by 1 to change to the previous question
    setChoice(answers[index - 1]); // setting choice to the already chosen answer to the previous question
  };
  const handleOptionClick = (option) => {
    setChoice(option); // setting choice which will then be used to compare with options to parse it as props to OptionDiv
    // if the choice matches with option then that option will dynamically change style
  };

  return (
    <div>
      {user.id ? (
        <>
          <h3>{questionsArray[index] && questionsArray[index].question}</h3>
          <div>
            {questionsArray[index] &&
              questionsArray[index].options.map((option, opIndex) => (
                <OptionDiv
                  onClick={() => handleOptionClick(option)}
                  $selected={choice}
                  $divindex={option}
                  key={opIndex}
                >
                  {option}
                </OptionDiv>
              ))}
          </div>
          {index > 1 && <button onClick={handleBackButton}>back</button>}
          <button onClick={handleNextButton}>next</button>
        </>
      ) : (
        <>
          <p>Please log in first</p>
          <button onClick={() => router.push("/signin")}>Log In</button>
        </>
      )}
    </div>
  );
}
