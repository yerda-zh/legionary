"use client";
import styled from "styled-components";

export const CreateWorkoutContainer = styled.div`
  background: var(--color-main);
  color: var(--color-base);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionDiv = styled.div`
  border: 1px solid
    ${(props) => (props.$selected === props.$divindex ? "red" : "black")};
  width: fit-content;
  margin: 1rem 0;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(1rem, 2vw + 1rem, 1.7rem);
  }

  p {
    margin: 1rem 0 2rem 0;
    font-size: clamp(0.5rem, 2vw + 0.5rem, 1rem);
    text-align: justify;
  }

  div {
    margin-bottom: 5rem;
    width: 12rem;
    height: 2.5rem;
    border-radius: 1rem;
    overflow: hidden;
    border: none;
    position: relative;
    z-index: 1;
    background: var(--color-accent-light);
  }

  button {
    color: var(--color-main);
    border: none;
    font-weight: 700;
    font-size: clamp(0.7rem, 2vw + 0.5rem, 1.1rem);
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: 0.25s ease-in-out;
    cursor: pointer;
  }

  span {
    z-index: 1;
  }

  button::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background: linear-gradient(40deg, var(--color-accent) 0%, var(--color-accent-light ) 100%);;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.25s ease-in-out;
  }
  button:hover {
    color: var(--color-base);
  }
  button:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;