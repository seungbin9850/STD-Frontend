import styled from "styled-components";

export const StudyPostContainer = styled.div`
  width: 100%;
  height: 210px;
  border-bottom: 1px solid #707070;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StudyPostSection = styled.div`
  margin-left: 30px;
`;

export const StudyPostTitle = styled.div`
  font-size: 30px;
  font-family: "NanumGothicBold";
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StudyPostTagsContainer = styled.div`
  display: flex;
  margin-top: 70px;
`;

export const StudyPostTag = styled.div`
  margin-right: 20px;
  font-size: 20px;
`;
