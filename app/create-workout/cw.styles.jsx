import styled from "styled-components";

export const OptionDiv = styled.div`
  border: 1px solid #000;
  width: fit-content;
  margin: 1rem 0;
  cursor: pointer;

  ${(props) => 
    props.clicked &&
    `
    border: 1px solid #ff7b00;
  `}
`;