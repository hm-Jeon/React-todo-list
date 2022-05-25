import { useSetRecoilState } from "recoil";
import { Categories, categoryAtom } from "../atoms";
import { CategoryBtn, Container } from "./CategoryBox.styled";

function CategoryBox() {
  const setCategory = useSetRecoilState(categoryAtom);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <Container>
      {Object.keys(Categories).map(key => (
        <CategoryBtn
          key={key}
          value={Categories[key as Categories]}
          onClick={onClick}
        >
          {Categories[key as Categories]}
        </CategoryBtn>
      ))}
    </Container>
  );
}

export default CategoryBox;
