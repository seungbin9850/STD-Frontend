import { useCallback } from "react";
import { useHistory } from "react-router";
import * as S from "./style";

function Header() {
  const history = useHistory();
  const logoutButtonClickHandler = useCallback(() => {
    localStorage.removeItem("accessToken");
    history.push("/");
  }, [history]);

  return (
    <S.HeaderContainer>
      <S.HeaderText onClick={logoutButtonClickHandler}>๋ก๊ทธ์์</S.HeaderText>
    </S.HeaderContainer>
  );
}

export default Header;
