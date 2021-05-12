import { Header } from "../Default/Header";
import { Sidebar } from "./Sidebar";
import * as S from "./style";

const MyMain = () => {
  return (
    <S.MainBody>
      <Header></Header>
      <S.MainContainer>
        <Sidebar num={2}></Sidebar>
      </S.MainContainer>
    </S.MainBody>
  );
};

export default MyMain;
