import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  /* border-radius: 0.5em 0.5em 0 0; */
  /* background-color: ${props => props.theme.fieldBgColor}; */
`;

export const InputBox = styled.div`
  display: flex;
  gap: 0.2em;
`;

export const Input = styled.input`
  flex-grow: 1;
  font-family: inherit;
  font-size: 1em;
  padding: 0.5em;
  border: none;
  border-radius: 0.2em;
  outline: none;
`;

export const ErrorMsg = styled.span`
  height: 1em;
  margin-top: 0.4em;
  color: red;
`;

export const SubmitBtn = styled.button`
  font-size: 1em;
  padding: 0.5em 0.7em;
  border: none;
  border-radius: 0.2em;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
`;
