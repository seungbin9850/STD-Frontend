import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { signup } from "../../api";
import * as S from "./style";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassowrd] = useState("");
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const idInputOnChange = useCallback((e) => setId(e.target.value), []);
  const passwordInputOnChange = useCallback(
    (e) => setPassowrd(e.target.value),
    []
  );
  const nicknameInputOnChange = useCallback(
    (e) => setNickname(e.target.value),
    []
  );
  const signupButtonClickHandler = useCallback(async () => {
    try {
      await signup(id, password, nickname);
      alert("회원가입 성공");
      history.push("/");
    } catch (e) {
      switch (e.response.status) {
        case 400:
          alert("형식이 잘못됨");
          break;
        case 409:
          alert("이미 존재하는 유저");
          break;
        case 500:
          alert("에러");
          break;
        default:
          break;
      }
    }
  }, [id, password, nickname, history]);
  const pressHandler = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        signupButtonClickHandler();
      }
    },
    [signupButtonClickHandler]
  );

  return (
    <S.SignupContainer>
      <S.SignupSection>
        <S.SignupInput
          placeholder="아이디"
          onChange={idInputOnChange}
          onKeyDown={pressHandler}
        />
        <S.SignupInput
          placeholder="비밀번호"
          type="password"
          onChange={passwordInputOnChange}
          onKeyDown={pressHandler}
        />
        <S.SignupInput
          placeholder="닉네임"
          onChange={nicknameInputOnChange}
          onKeyDown={pressHandler}
        />
        <S.SignupButton onClick={signupButtonClickHandler}>
          Sign Up
        </S.SignupButton>
        <S.MoveTextContainer>
          <S.MoveText to="/">로그인</S.MoveText>
          <S.MoveText>비밀번호 찾기</S.MoveText>
        </S.MoveTextContainer>
      </S.SignupSection>
    </S.SignupContainer>
  );
};

export default Signup;
