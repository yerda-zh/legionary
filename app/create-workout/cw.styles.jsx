'use client'
import styled from "styled-components";

export const CreateWorkoutContainer = styled.div`
  background: var(--color-main);
  color: var(--color-base);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionDiv = styled.div`
  border: 1px solid ${props => props.$selected === props.$divindex ? "red" : "black"};
  width: fit-content;
  margin: 1rem 0;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  
`;