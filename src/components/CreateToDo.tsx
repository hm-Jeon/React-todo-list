import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryAtom, toDoAtom } from "../atoms";
import {
  ErrorMsg,
  Field,
  Form,
  Input,
  InputBox,
  SubmitBtn,
} from "./CreateToDo.styled";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const setTodos = useSetRecoilState(toDoAtom);
  const category = useRecoilValue(categoryAtom);

  const onValid = ({ toDo }: IForm) => {
    setValue("toDo", "");
    setTodos(current => [...current, { text: toDo, id: Date.now(), category }]);
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Field>
        <InputBox>
          <Input
            {...register("toDo", { required: "Please Write a ToDo" })}
            placeholder="Write a to do"
          />
          <SubmitBtn>Add</SubmitBtn>
        </InputBox>
        <ErrorMsg>{errors?.toDo ? errors?.toDo?.message : null}</ErrorMsg>
      </Field>
    </Form>
  );
}

export default CreateToDo;
