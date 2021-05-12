import { useHistory } from "react-router";
import * as S from "./style";

const SidebarNavigation = ({ style, url, children }) => {
  const history = useHistory();
  const navigationClick = () => {
    history.push(url);
  };

  return (
    <S.Navigation onClick={navigationClick} selectItem={style}>
      {children}
    </S.Navigation>
  );
};

export default SidebarNavigation;
