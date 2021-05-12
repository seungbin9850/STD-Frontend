import styled from "styled-components";

export const FindStudyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StudySearchContainer = styled.div`
  width: 908px;
  height: 64px;
  margin-bottom: 50px;
  display: flex;
`;

export const StudySearchInput = styled.input`
  width: 796px;
  height: 56px;
  border: 1px solid #45e36a;
  font-size: 25px;
  outline: none;
  padding: 3px 15px;
`;

export const StudySearchButton = styled.button`
  width: 90px;
  height: 64px;
  background-color: #45e36a;
  color: white;
  border: none;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const StudyPostsListContainer = styled.div`
  width: 1200px;
  height: 630px;
  border-top: 1px solid #707070;
`;

export const StudyPostPageButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

export const StudyPostsPage = styled.div`
  font-size: 20px;
`;

export const StudyPostsPageButton = styled.button`
  all: unset;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;
