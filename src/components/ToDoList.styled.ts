import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  padding: 1em;
  margin: 3em auto;
  border-radius: 0.5em;
  background-color: ${props => props.theme.fieldBgColor};
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  padding: 0.5em 0;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
  border: 1px solid white;
  border-radius: 0.5em;
`;

export const Category = styled.h2`
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

export const EmptyMsg = styled.span`
  text-align: center;
  padding: 0.5em 0;
  text-transform: uppercase;
`;
