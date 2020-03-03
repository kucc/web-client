import { useRef, useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPen } from '@fortawesome/free-solid-svg-icons';

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
  const [newPostType, setNewPostType] = useState('자유게시판');
  const [showMenu, setShowMenu] = useState(false);

  const postTypeName = {
    공지: 'NOTICE',
    자유게시판: 'FREE',
    교우게시판: 'ALUMNI',
  };

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
          type: postTypeName[newPostType],
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

  const openMenu = () => {
    setShowMenu(true);
    document.addEventListener('click', closeMenu);
  };

  const closeMenu = () => {
    event.preventDefault();
    setShowMenu(false);
    document.removeEventListener('click', closeMenu);
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
                  <S.NewPostTypeListContainer>
                    <S.NewPostTypeSelected
                      onClick={() => {
                        showMenu ? closeMenu() : openMenu();
                      }}
                    >
                      {newPostType}{' '}
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{ color: '#c93333' }}
                        size={'lg'}
                      />
                    </S.NewPostTypeSelected>
                  </S.NewPostTypeListContainer>
                </S.NewPostTypeContainer>
                {showMenu && (
                  <S.NewPostTypeList>
                    <S.NewPostTypeListItem
                      onClick={() => {
                        setNewPostType('공지');
                        closeMenu();
                      }}
                    >
                      공지
                    </S.NewPostTypeListItem>
                    <S.NewPostTypeListItem
                      onClick={() => {
                        setNewPostType('자유게시판');
                        closeMenu();
                      }}
                    >
                      자유게시판
                    </S.NewPostTypeListItem>
                    <S.NewPostTypeListItem
                      onClick={() => {
                        setNewPostType('교우게시판');
                        closeMenu();
                      }}
                    >
                      교우게시판
                    </S.NewPostTypeListItem>
                  </S.NewPostTypeList>
                )}
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
