import { atom, selector } from "recoil";

// export type categories = "DONE" | "DOING" | "TODO";
export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryAtom = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoAtom = atom<ITodo[]>({
  key: "toDo",
  default: JSON.parse(localStorage.getItem("toDos") || "[]"),
});

// recoil의 selector를 이용해 state의 value를 가공하여 return할 수 있다.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    // get 함수를 이용해 atom을 selector로 get 할 수 있다.
    const toDos = get(toDoAtom);
    const category = get(categoryAtom);

    // atom의 value를 가공하여 return한다.
    // atom의 value 원본은 변경되지 않는다.
    return toDos.filter(toDo => toDo.category === category);
  },
});
