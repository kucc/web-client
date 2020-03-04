import { useRef, useState, useEffect } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPen } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
import Layout from '../../components/layout';
import BoardNavigation from '../../components/board/board-navigation';
import { Grid, Row, Col } from '../../components/grid/styles';

const newPost: NextPage = () => {
  const router = useRouter();
  const Editor = dynamic(import('../../components/editor/index'), {
    ssr: false,
  });

  const newPostTitleReferenece = useRef(null);
  const newPostTypeReference = useRef(null);
  const editorRef = useRef(null);

  const handleSubmit = async () => {
    if (confirm('게시글을 작성하시겠습니까?')) {
      const newPostTitle = newPostTitleReferenece.current.value;
      const newPostType = newPostTypeReference.current.value;
      const newPostContent = editorRef.current.getInstance().getValue();
      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newPostTitle,
          type: newPostType,
          content: newPostContent,
        }),
      });
      if (response.status === 201) {
        alert('성공적으로 게시되었습니다 :)');
        router.push('/board');
      }
    }
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
                    <span style={{ fontWeight: 'bold', color: '#c93333' }}>
                      새 글 쓰기
                    </span>
                  </S.BoardMenuHistory>
                </S.BoardMenu>
                <S.NewPostTitleContainer>
                  <S.NewPostTitleLabel>제목</S.NewPostTitleLabel>
                  <S.NewPostTitleInput
                    placeholder="제목을 입력해주세요"
                    ref={newPostTitleReferenece}
                  />
                </S.NewPostTitleContainer>
                <S.NewPostTypeContainer>
                  <S.NewPostTypeLabel>게시판 종류</S.NewPostTypeLabel>
                  <S.NewPostTypeListContainer></S.NewPostTypeListContainer>
                  <S.NewPostTypeSelected ref={newPostTypeReference}>
                    <option value="NOTICE">공지</option>
                    <option value="FREE">자유게시판</option>
                    <option value="ALUMNI">교우게시판</option>
                  </S.NewPostTypeSelected>
                </S.NewPostTypeContainer>
                <S.EditorContainer>
                  <Editor editorRef={editorRef} />
                </S.EditorContainer>
                <S.NewPostSubmitButton onClick={handleSubmit}>
                  <span style={{ marginRight: '1rem' }}>
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  제출하기
                </S.NewPostSubmitButton>
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
      </S.NewPost>
    </Layout>
  );
};

export default newPost;
