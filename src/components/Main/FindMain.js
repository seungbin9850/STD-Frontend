import * as S from "./style";
import { Header } from "../Default/Header";
import { Sidebar } from "./Sidebar";
import { FindStudy } from "./Study/FindStudy";

const FindMain = () => {
  return (
    <S.MainBody>
      <Header></Header>
      <S.MainContainer>
        <Sidebar num={1}></Sidebar>
        <FindStudy></FindStudy>
      </S.MainContainer>
    </S.MainBody>
  );
};

export default FindMain;
