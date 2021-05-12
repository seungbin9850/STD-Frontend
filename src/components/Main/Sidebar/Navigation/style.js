import styled from "styled-components";

export const Navigation = styled.button`
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
