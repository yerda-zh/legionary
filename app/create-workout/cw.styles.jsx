'use client'
import styled from "styled-components";

export const OptionDiv = styled.div`
  border: 1px solid ${props => props.$selected === props.$divindex ? "red" : "black"};
  width: fit-content;
  margin: 1rem 0;
  cursor: pointer;
`;