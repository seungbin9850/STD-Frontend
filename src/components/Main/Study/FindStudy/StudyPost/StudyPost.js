import * as S from "./style";

const StudyPost = ({ id, title, tags, isMine }) => {
  return (
    <S.StudyPostContainer>
      <S.StudyPostTitle>{title}</S.StudyPostTitle>
      <S.StudyPostTagsContainer>
        {tags.map((e) => (
          <S.StudyPostTag>#{e.tag}</S.StudyPostTag>
        ))}
      </S.StudyPostTagsContainer>
    </S.StudyPostContainer>
  );
};

export default StudyPost;
