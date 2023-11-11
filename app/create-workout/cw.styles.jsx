"use client";
import styled from "styled-components";

export const CreateWorkoutContainer = styled.div`
  color: var(--color-base);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionDiv = styled.div`
  border: 1px solid ${(props) => (props.$selected === props.$divindex ? "red" : "black")};
  width: fit-content;
  margin: 1rem 0;
  cursor: pointer;
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