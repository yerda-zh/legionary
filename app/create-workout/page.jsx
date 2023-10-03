'use client'
import { useState } from "react";
import { OptionDiv } from "./cw.styles";

export default function CreateWorkout() {
    const [index, setIndex] = useState(0);
    const [choice, setChoice] = useState(null); // used for dynamic styling and building the answers set
    const [answers, setAnswers] = useState([]); // used to make server requests
  
    const questions = [
      {
        question: 'age',
        options: ['18-29', '30-39']
      },
      {
        question: 'goal',
        options: ['lose weight', 'gain muscle mass']
      },
    ]

    const handleNextButton = () => {
      if(choice) {
        setIndex((prevIndex) => prevIndex + 1); // incrementing index by 1 so that the question set would change to the next one
        answers[index] || answers[index] === choice ? answers.splice(index, 1, choice) : answers.push(choice);
        // if user already chose one option before, the currenly chosen choice replaces the old one, otherwise the option gets added
        // to the answers set
        setChoice(answers[index+1]); // setting choice to next questions already chosen option if it exists
      }
    }
    const handleBackButton = () => {
      setIndex((prevIndex => prevIndex - 1)); // decrementing index by 1 to change to the previous question
      setChoice(answers[index-1]); // setting choice to the already chosen answer to the previous question
    }
    const handleOptionClick = (option) => {
      setChoice(option); // setting choice which will then be used to compare with options to parse it as props to OptionDiv
      // if the choice matches with option then that option will dynamically change style
    }

    return (
      <div>
        <h3>
          {questions[index] && questions[index].question}
        </h3>
        <div>
          {questions[index] && questions[index].options.map((option, opIndex)=>(
            <OptionDiv onClick={() => handleOptionClick(option)} $selected={choice} $divindex={option} key={opIndex}>{option}</OptionDiv>
          ))}
        </div>
        {index > 0 && <button onClick={handleBackButton}>back</button>}
        <button onClick={handleNextButton}>next</button>
      </div>
    );
  }