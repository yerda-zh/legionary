"use client";
import styled from "styled-components";

export const CreateWorkoutContainer = styled.div`
  color: var(--color-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;

  .indicator {
    align-self: flex-end;
    margin-top: 2rem;
  }
  .description {
    opacity: 0.7;
    text-align: justify;
    margin: 2rem 0;
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
  width: 30rem;

  h4 {
    color: var(--color-accent-light);
    font-size: clamp(1rem, 2vw + 1.1rem, 1.4rem);
    text-align: center;
    margin-bottom: 1.5rem;
  }

  button {
    margin: 1rem 0.3rem;
    background: var(--color-secondary-light);
    color: var(--color-base);
    border: none;
    padding: 0.5rem 1.7rem;
    font-weight: 700;
    font-size: clamp(0.7rem, 2vw + 0.5rem, 1.1rem);
    border-radius: 0.4rem;
    transition: 0.3s ease;
    cursor: pointer;
  }
  button:hover {
    background: var(--color-main-dark);
  }
  button:active {
    transform: scale(0.95);
    transition: 0.2s ease;
  }
`;



export const OptionDiv = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${(props) => (props.$selected === props.$divindex ? "var(--color-accent-light)" : "var(--color-secondary-light)")};
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: var(--color-main);
  }
`;

export const LoginContainer = styled.div`
  margin-top: 7rem;
  padding: 0 1.5rem;
  text-align: center;

  h2 {
    font-size: clamp(1rem, 2vw + 1rem, 1.7rem);
  }

  p {
    margin: 1.5rem 0 3rem 0;
    font-size: clamp(0.5rem, 2vw + 0.5rem, 1rem);
    opacity: 0.85;
  }

  button {
    background: var(--color-accent-light);
    color: var(--color-main);
    border: none;
    padding: 0.7rem 3rem;
    font-weight: 700;
    font-size: clamp(0.7rem, 2vw + 0.5rem, 1.1rem);
    border-radius: 0.7rem;
    transition: 0.3s ease;
    cursor: pointer;
  }
  button:hover {
    color: var(--color-base);
    background: var(--color-accent);
  }
  button:active {
    transform: scale(0.95);
    transition: 0.2s ease;
  }
`;