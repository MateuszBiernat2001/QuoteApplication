import styled, { css } from "styled-components";

const Button = styled.button`
  height: 30px;
  width: 65px;
  border-radius: 25px;
  border: none;
  background-color:lightgreen;
  color: white;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;

  ${({prev}) => (
    prev &&  css`
      background-color : red;
    `
  )}

  ${({add}) => (
    add && css `
      background-color: gray;
    `
  )}
`;

export default Button;