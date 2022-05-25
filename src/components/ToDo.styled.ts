import styled from "styled-components";

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.2em;
  padding: 0.5em 0.2em;
  border-bottom: 1px dashed white;
`;

export const Text = styled.span`
  line-height: 1.2em;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 0.2em;
`;

export const Btn = styled.button`
  padding: 0.3em;
  border: none;
  border-radius: 0.2em;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
`;
