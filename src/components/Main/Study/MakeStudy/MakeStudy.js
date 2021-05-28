import {
  MakeStudyContainer,
  MakeStudyContentInput,
  MakeStudySection,
  MakeStudyTagInput,
  MakeStudyTitleInput,
} from "./style";

const MakeStudy = () => {
  return (
    <MakeStudyContainer>
      <MakeStudySection>
        <MakeStudyTitleInput></MakeStudyTitleInput>
        <MakeStudyContentInput></MakeStudyContentInput>
        <MakeStudyTagInput></MakeStudyTagInput>
      </MakeStudySection>
    </MakeStudyContainer>
  );
};

export default MakeStudy;
