'use client'
import { useState } from "react";
import { OptionDiv } from "./cw.styles";

export default function CreateWorkout() {
    const [index, setIndex] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [select, setSelect] = useState();
    const [arr, setArr] = useState([]);
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
    const handleNext = () => {
      setIndex((prevIndex => prevIndex + 1));
    }
    const handleOption = (option) => {
      // setClicked(true);
      // setSelect(option);
      const selected = questions[index].options.filter(item => item.includes(option));
      questions[index].options = selected;
      console.log(questions);
    }

    return (
      <div>
        <h3>
          {questions[index] && questions[index].question}
        </h3>
        <div>
          {questions[index] && questions[index].options.map((option)=>(
            <OptionDiv onClick={() => handleOption(option)} key={option}>{option}</OptionDiv>
          ))}
        </div>
        <button onClick={handleNext}>next</button>
      </div>
    );
  }