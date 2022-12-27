import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
`;

const PostItem = styled.div`
  width: 100%;
  height: 350px;
  border: 2px solid black;
`;

export type postType = {
  page: number;
  contents: string;
};

export const samplePostList: postType[] = [
  {
    page: 1,
    contents: '안녕하세요 1번째 글',
  },

  {
    page: 1,
    contents: '안녕하세요 2번째 글',
  },

  {
    page: 1,
    contents: '안녕하세요 3번째 글',
  },

  {
    page: 2,
    contents: '안녕하세요 4번째 글',
  },

  {
    page: 2,
    contents: '안녕하세요 5번째 글',
  },

  {
    page: 2,
    contents: '안녕하세요 6번째 글',
  },

  {
    page: 3,
    contents: '안녕하세요 7번째 글',
  },

  {
    page: 3,
    contents: '안녕하세요 8번째 글',
  },

  {
    page: 3,
    contents: '안녕하세요 9번째 글',
  },

  {
    page: 4,
    contents: '안녕하세요 10번째 글',
  },
];

export default function FeedMain(): JSX.Element {
  const getPostList = (page: number): postType[] => samplePostList.filter((post: postType) => post.page === page);

  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<postType[]>(getPostList(1));

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setPosts(posts.concat(getPostList(page + 1)));
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [page, posts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, [handleScroll]);

  return (
    <Container>
      {
        posts.map((post: postType, idx: number) => (
          <PostItem key={idx}>{post.contents}</PostItem>
        ))
      }
    </Container>
  );
}
