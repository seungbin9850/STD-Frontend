import { useState } from "react";
import * as S from "./style";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassowrd] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <S.SignupContainer>
      <S.SignupSection>
        <S.SignupInput placeholder="아이디" />
        <S.SignupInput placeholder="비밀번호" type="password" />
        <S.SignupInput placeholder="닉네임" />
        <S.SignupButton>Sign Up</S.SignupButton>
        <S.MoveTextContainer>
          <S.MoveText to="/">로그인</S.MoveText>
          <S.MoveText>비밀번호 찾기</S.MoveText>
        </S.MoveTextContainer>
      </S.SignupSection>
    </S.SignupContainer>
  );
};

export default Signup;
