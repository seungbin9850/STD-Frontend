import { SidebarNavigation } from "./Navigation";
import * as S from "./style";

const navigation = [
  { name: "스터디 만들기", url: "/make" },
  { name: "스터디 찾기", url: "/find" },
  { name: "내 스터디", url: "/mine" },
  { name: "내가 만든 스터디", url: "/made" },
  { name: "내가 신청한 스터디", url: "/apply" },
];

const Sidebar = ({ num }) => {
  return (
    <S.SidebarContainer>
      {navigation.map((e, index) => {
        return num === index ? (
          <SidebarNavigation style={true} url={e.url}>
            {e.name}
          </SidebarNavigation>
        ) : (
          <SidebarNavigation style={false} url={e.url}>
            {e.name}
          </SidebarNavigation>
        );
      })}
    </S.SidebarContainer>
  );
};

export default Sidebar;
