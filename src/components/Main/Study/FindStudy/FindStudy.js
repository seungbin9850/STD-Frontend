import { useCallback, useEffect, useState } from "react";
import { getPosts } from "../../../../api/post";
import StudyPost from "./StudyPost/StudyPost";
import * as S from "./style";

let maxPage;

const FindStudy = () => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPosts(page);
        setPosts(res.data.data);
        maxPage = res.data.maxPage;
      } catch (e) {
        if (page < 0) setPage(0);
        alert("실패");
      }
    }
    fetchData();
  }, [page]);

  const nextPageButtonOnClick = useCallback(async () => {
    try {
      if (page < maxPage - 1) setPage((prevPage) => prevPage + 1);
    } catch (e) {
      alert("더 이상 글이 없습니다.");
    }
  }, [page]);

  const previousPageButtonOnClick = useCallback(async () => {
    try {
      if (page > 0) setPage((prevPage) => prevPage - 1);
    } catch (e) {
      alert("더 이상 뒤로 갈 수 없습니다.");
    }
  }, [page]);

  return (
    <S.FindStudyContainer>
      <S.StudySearchContainer>
        <S.StudySearchInput placeholder="Search..."></S.StudySearchInput>
        <S.StudySearchButton>검색</S.StudySearchButton>
      </S.StudySearchContainer>
      <S.StudyPostsListContainer>
        {posts.map((e) => (
          <StudyPost id={e.id} title={e.title} tags={e.tags}></StudyPost>
        ))}
      </S.StudyPostsListContainer>
      <S.StudyPostPageButtonContainer>
        <S.StudyPostsPageButton onClick={previousPageButtonOnClick}>{"< 이전"}</S.StudyPostsPageButton>
        <S.StudyPostsPage>{page + 1}</S.StudyPostsPage>
        <S.StudyPostsPageButton onClick={nextPageButtonOnClick}>{"다음 >"}</S.StudyPostsPageButton>
      </S.StudyPostPageButtonContainer>
    </S.FindStudyContainer>
  );
};

export default FindStudy;
