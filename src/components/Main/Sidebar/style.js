import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 350px;
  border-right: 1px solid rgba(112, 112, 112, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarNavigation = styled.button`
  all: unset;
  font-size: 20px;
  margin-top: 90px;
  :hover {
    cursor: pointer;
    color: #45e36a;
    font-family: "NanumGothicBold";
  }
  color: ${(props) => (props.selectItem ? "#45e36a" : "")};
  font-family: ${(props) => (props.selectItem ? "NanumGothicBold" : "")};
`;
