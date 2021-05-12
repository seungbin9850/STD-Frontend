import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid rgba(112, 112, 112, 0.5);
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.button`
  all: unset;
  margin-right: 80px;
  font-size: 20px;
  font-family: "NanumGothicBold";
  :hover {
    cursor: pointer;
  }
`;
