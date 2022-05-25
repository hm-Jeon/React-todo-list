import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { categoryAtom, toDoAtom, toDoSelector } from "../atoms";
import CategoryBox from "./CategoryBox";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { Category, Container, EmptyMsg, Title, List } from "./ToDoList.styled";

function ToDoList() {
  // useRecoilState는 value와 modifier를 함께 return한다.(useState와 같다.)
  // value만 얻고 싶다면 useRecoilValue, modifier만 얻고 싶다면 useSetRecoilState
  const category = useRecoilValue(categoryAtom);
  const toDos = useRecoilValue(toDoAtom);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  // selector의 값도 atome과 동일하게 useRecoilValue를 이용해 받아올 수 있다.
  const selectedToDos = useRecoilValue(toDoSelector);

  return (
    <Container>
      <Title>To Do List</Title>
      <CategoryBox />
      <CreateToDo />
      <List>
        <Category>{category}</Category>
        {selectedToDos?.length! > 0 ? (
          selectedToDos?.map(toDo => <ToDo key={toDo.id} {...toDo} />)
        ) : (
          <EmptyMsg>Empty</EmptyMsg>
        )}
      </List>
    </Container>
  );
}

export default ToDoList;
