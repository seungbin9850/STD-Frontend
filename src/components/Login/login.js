import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../api";
import * as S from "./style";

const Login = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idInputOnChange = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const passwordInputOnChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const loginButtonClickHandler = useCallback(async () => {
    try {
      const res = await login(id, password);
      localStorage.setItem("accessToken", res.data.token);
    } catch (e) {
      alert("로그인 실패");
    }
  }, [id, password]);
  const pressHandler = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        loginButtonClickHandler();
      }
    },
    [loginButtonClickHandler]
  );

  return (
    <S.LoginContainer>
      <S.LoginSection>
        <S.LoginInput
          placeholder="아이디"
          onChange={idInputOnChange}
          onKeyDown={pressHandler}
        />
        <S.LoginInput
          type="password"
          placeholder="비밀번호"
          onChange={passwordInputOnChange}
          onKeyDown={pressHandler}
        />
        <S.LoginButton onClick={loginButtonClickHandler}>Sign In</S.LoginButton>
        <S.MoveTextContainer>
          <S.MoveText to="/signup">회원가입</S.MoveText>
          <S.MoveText>비밀번호 찾기</S.MoveText>
        </S.MoveTextContainer>
      </S.LoginSection>
    </S.LoginContainer>
  );
};

export default Login;
