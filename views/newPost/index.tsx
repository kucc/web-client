import { useRef, useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/router';

import * as S from './styles';
import Layout from '../../components/layout';
import BoardNavigation from '../../components/board/board-navigation';
import { Grid, Row, Col } from '../../components/grid/styles';
import { useUser } from '../../context/user';

const newPost: NextPage = () => {
  const router = useRouter();
  const Editor = dynamic(import('../../components/editor/index'), {
    ssr: false,
  });
  const editorRef = useRef(null);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostType, setNewPostType] = useState('');

  const handleSubmit = async () => {
    if (confirm('게시글을 작성하시겠습니까?')) {
      const newPostContent = editorRef.current.getInstance().getValue();

      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newPostTitle,
          content: newPostContent,
          type: newPostType,
        }),
      });
      if (response.status === 201) {
        alert('성공적으로 게시되었습니다 :)');
        router.push('/board');
      }
    }
  };

  const handleTitleOnChange = e => {
    e.preventDefault();
    setNewPostTitle(e.target.value);
  };

  const handleTypeOnChange = e => {
    e.preventDefault();
    setNewPostType(e.target.value);
  };

  return (
    <Layout>
      <S.NewPost>
        <Grid>
          <Row>
            <S.BoardContainer>
              <Col span={2}>
                <S.BoardNavbar>
                  <BoardNavigation />
                </S.BoardNavbar>
              </Col>
              <Col span={10}>
                <S.BoardMenu>
                  <S.BoardMenuHistory>
                    Home > Board >{' '}
                    <span style={{ fontWeight: 'bold' }}>NewPost</span>
                  </S.BoardMenuHistory>
                </S.BoardMenu>
                <S.NewPostTitleContainer>
                  <S.NewPostTitleLabel>제목</S.NewPostTitleLabel>
                  <S.NewPostTitleInput
                    placeholder="제목을 입력해주세요"
                    value={newPostTitle}
                    onChange={handleTitleOnChange}
                  />
                </S.NewPostTitleContainer>
                <S.NewPostTypeContainer>
                  <S.NewPostTypeLabel>게시판 종류</S.NewPostTypeLabel>
                  <S.NewPostTypeInput
                    placeholder="게시판 종류를 입력해주세요"
                    value={newPostType}
                    onChange={handleTypeOnChange}
                  />
                </S.NewPostTypeContainer>
                <Editor editorRef={editorRef} />
                <button onClick={handleSubmit}>제출하기</button>
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
      </S.NewPost>
    </Layout>
  );
};

export default newPost;
