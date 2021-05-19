import { Header } from "../Default/Header";
import { Sidebar } from "./Sidebar";
import { MakeStudy } from "./Study/MakeStudy";
import * as S from "./style";

const MakeMain = () => {
  return (
    <S.MainBody>
      <Header></Header>
      <S.MainContainer>
        <Sidebar num={0}></Sidebar>
        <MakeStudy></MakeStudy>
      </S.MainContainer>
    </S.MainBody>
  );
};

export default MakeMain;
