import React, { useCallback, useState } from "react";
import { login } from "../../api";
//import { useHistory } from "react-router-dom";
import * as S from "./style";

const Login = () => {
  //const history = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idInputOnChange = useCallback((e) => {
    setId(e.target.value);
  });
  const passwordInputOnChange = useCallback((e) => {
    setPassword(e.target.value);
  });
  const pressHandler = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        loginButtonClickHandler();
      }
    },
    [id, password]
  );
  const loginButtonClickHandler = useCallback(async () => {
    try {
      const res = await login(id, password);
      console.log(res);
    } catch (e) {
      alert("로그인 실패");
    }
  });

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
        <S.LoginButton onClick={loginButtonClickHandler}>Sign in</S.LoginButton>
      </S.LoginSection>
    </S.LoginContainer>
  );
};

export default Login;
