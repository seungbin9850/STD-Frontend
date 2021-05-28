import styled from "styled-components";

export const MakeStudyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MakeStudySection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MakeStudyTitleInput = styled.input`
  width: 90%;
  height: 40px;
  font-size: 20px;
  outline: none;
  border: 1px solid #45e36a;
  margin-bottom: 40px;
`;

export const MakeStudyContentInput = styled.textarea`
  width: 90%;
  font-size: 20px;
  height: 400px;
  outline: none;
  resize: none;
  border: 1px solid #45e36a;
`;

export const MakeStudyTagInput = styled.input`
  width: 90%;
  font-size: 20px;
  height: 40px;
  outline: none;
  border: 1px solid #45e36a;
`;
