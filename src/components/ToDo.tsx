import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoAtom } from "../atoms";
import { Btn, BtnBox, List, Text } from "./ToDo.styled";

function ToDo({ text, id, category }: ITodo) {
  const setToDos = useSetRecoilState(toDoAtom);

  // interface의 속성 하나만을 사용하려면 아래와 같이 작성하면 된다.(interface["속성"])
  const onClick = (newCategory: Categories) => {
    setToDos(current => {
      // 현재 배열에서 id를 기반으로 해당 item의 index를 찾는다.
      const targetIndex = current.findIndex(todo => todo.id === id);

      // 찾은 index의 위치에 주입할 item을 만든다.
      const newToDo = {
        text,
        id,
        category: newCategory,
      };

      // 찾은 index의 이전까지의 item과 이후의 item을 잘라낸다.(Array.slice())
      // 이전 item + 새로운 item + 이후 item 형태의 배열을 반환한다.
      return [
        ...current.slice(0, targetIndex),
        newToDo,
        ...current.slice(targetIndex + 1),
      ];
    });
  };

  const onDeleteClick = () => {
    setToDos(current => current.filter(toDo => toDo.id !== id));
  };

  return (
    <List>
      <Text>{text}</Text>
      <BtnBox>
        {Object.keys(Categories).map(key => {
          if (key !== category) {
            return (
              <Btn
                key={key}
                onClick={() => onClick(Categories[key as Categories])}
              >
                {Categories[key as Categories]}
              </Btn>
            );
          } else {
            return null;
          }
        })}
        <Btn onClick={onDeleteClick}>Delete</Btn>
      </BtnBox>
    </List>
  );
}

export default ToDo;
