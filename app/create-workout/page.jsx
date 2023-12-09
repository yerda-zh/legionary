"use client";
import { useState } from "react";
import { sex, questionsMale, questionsFemale } from "../_constants/constants";
import { useRouter } from "next/navigation";
import { AiFillInfoCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer, updateAnswer } from "../redux/answersSlice";
import { momentum } from "ldrs";
import '../_animations/animations.scss';
import {
  OptionDiv,
  LoginContainer,
  CreateWorkoutContainer,
  QuestionDiv,
  OptionsContainer,
  IndexBar,
  InfoDiv,
} from "./cw.styles";
import { ButtonAccent, ButtonGrey} from "../_components/buttons/Button";

export function getInitialProps() {
  return {
    props: {}, // Optional props to pass to the page
  };
}

export default function CreateWorkout() {
  momentum.register();
  const router = useRouter();
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null); // used for dynamic styling and building the answers set
  const [questionsArray, setQuestionsArray] = useState(sex);

  const answers = useSelector((state) => state.answers); // used to make server requests
  const user = useSelector((state) => state.user);

  const [info, setInfo] = useState({
    status: false,
    opIndex: null,
  });

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



  if (user.id && index < questionsArray.length) {
    return (
      <CreateWorkoutContainer>
        <p className="indicator">
          {index > 0 ? `${index}/${questionsArray.length}` : " "}
        </p>
        <IndexBar $index={index} $total={questionsArray.length} />
        <div className="grid">
          <div/>
          <QuestionDiv>
            <h3>{questionsArray[index] && questionsArray[index].question}</h3>
            <>
              {questionsArray[index] &&
                questionsArray[index].options.map((option, opIndex) => (
                  <OptionDiv
                    onClick={() => handleOptionClick(option)}
                    $selected={choice}
                    $divindex={option}
                    key={opIndex}
                  >
                    <p>{option}</p>
                    {questionsArray[index].description && (
                      <AiFillInfoCircle
                        onMouseEnter={() =>
                          setInfo({ status: true, opIndex: opIndex })
                        }
                        onMouseLeave={() => setInfo(false)}
                        style={{ fontSize: "1.2rem" }}
                      />
                    )}
                  </OptionDiv>
                ))}
            </>
            {index > 1 && <ButtonGrey onClick={handleBackButton}>back</ButtonGrey>}
            <ButtonGrey onClick={handleNextButton}>next</ButtonGrey>
          </QuestionDiv>
          <InfoDiv $status={info.status}>
            {questionsArray[index].description && (
              <p>{questionsArray[index].description[info.opIndex]}</p>
            )}
          </InfoDiv>
        </div>
      </CreateWorkoutContainer>
    );
  } else if (!user.id) {
    return (
      <CreateWorkoutContainer>
        <LoginContainer>
          <h2>To create workout routine, please log in to your account</h2>
          <p>
            Logging in allows you to personalize your experience, save
            preferences, and access exclusive content. Thank you for being part
            of our community!
          </p>
          <ButtonAccent onClick={() => router.push("/signin")}>Login</ButtonAccent>
        </LoginContainer>
      </CreateWorkoutContainer>
    );
  } else {
    return (
      <div style={{width: '100%', height: '90dvh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <l-momentum size="47" speed="0.9" color="white"/>
      </div>
    );
  }
}
