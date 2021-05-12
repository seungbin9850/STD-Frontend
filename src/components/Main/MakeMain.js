import { Header } from "../Default/Header";
import { Sidebar } from "./Sidebar";
import * as S from "./style";

const MakeMain = () => {
  return (
    <S.MainBody>
      <Header></Header>
      <S.MainContainer>
        <Sidebar num={0}></Sidebar>
      </S.MainContainer>
    </S.MainBody>
  );
};

export default MakeMain;
