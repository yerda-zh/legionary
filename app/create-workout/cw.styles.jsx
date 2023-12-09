"use client";
import styled, {keyframes} from "styled-components";

const DivAnimation = keyframes`
    0% {
        width: 18rem;
    }
`;

export const CreateWorkoutContainer = styled.div`
  color: var(--color-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 2rem 3rem 2rem;

  p {
    font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
  }

  .indicator {
    align-self: flex-end;
    margin-top: 2rem;
  }

  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 40rem 1fr;

    @media screen and (max-width: 1300px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0 1.5rem 2rem 1.5rem;
  }
`;

export const IndexBar = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 0.3rem;
  border-radius: 0.5rem;
  background: var(--color-secondary);
  position: relative;

  &::before {
    background: var(--color-base);
    transition: 0.3s ease-in-out;
    content: "";
    position: absolute;
    width: ${(props) => (props.$index/props.$total * 100)}%;
    height: 0.3rem;
    border-radius: 0.5rem;
  }
`;

export const QuestionDiv = styled.div`
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  padding: 2rem;
  border-radius: 0.7rem;
  width: 40rem;
  max-width: 100%;
  animation: ${DivAnimation} 0.5s ease-out forwards;
  justify-self: center;

  @media screen and (max-width: 600px) {
    padding: 1.5rem 1rem;
  }

  h3 {
    color: var(--color-accent-light);
    font-size: clamp(1rem, 2vw + 1.2rem, 1.6rem);
    text-align: center;
    margin: 0 0.5rem 1.5rem 0.5rem;
  }
`;



export const OptionDiv = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${(props) => (props.$selected === props.$divindex ? "var(--color-accent-light)" : "var(--color-secondary-light)")};
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.17s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: var(--color-main);
  }

  @media screen and (max-width:600px) {
    padding: 1rem;
  }
`;

export const InfoDiv = styled.div`
  background: var(--color-main-dark);
  display: ${props => (props.$status === true ? 'block' : 'none')};
  padding: 1.5rem 1rem;
  margin: 6rem 0 0 1rem;
  border-radius: 0.5rem;
  height: fit-content;

  p {
    font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
    line-height: 1.9rem;
    opacity: 0.8;
    text-align: justify;
  }

  @media screen and (max-width: 1300px){
    margin: 1.5rem 0 0 0;
  }
`;

export const LoginContainer = styled.div`
  margin-top: 7rem;
  text-align: center;

  h2 {
    font-size: clamp(1rem, 2vw + 1.4rem, 2.3rem);
  }

  p {
    margin: 1.5rem 0 3rem 0;
    opacity: 0.85;
  }
`;