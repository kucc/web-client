import { NextPage } from 'next';
import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import GalleryImage from '../../components/gallery/gallery-image';
import { useState } from 'react';

const Gallery: NextPage = () => {
  const [searchField, setSearchField] = useState('');
  const handleChange = e => {
    setSearchField(e.target.value);
  };
  return (
    <Layout>
      <S.Gallery>
        <Grid>
          <Row>
            <S.GalleryContainer>
              <Col span={12}>
                <S.GalleryMenu>
                  <S.GalleryMenuTitle>갤러리</S.GalleryMenuTitle>
                  <S.GalleryMenuHistory>Home > Gallery</S.GalleryMenuHistory>
                </S.GalleryMenu>
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
              <Col span={3}>
                <GalleryImage />
              </Col>
            </S.GalleryContainer>
          </Row>
          <Row>
            <Col span={4} offset={4}>
              <S.GallerySearchContainer>
                <S.GallerySearchInputContainer>
                  <FontAwesomeIcon icon={faSearch} size="2x" />
                  <S.GallerySearchInput
                    placeholder="검색어를 입력해주세요"
                    onChange={handleChange}
                    value={searchField}
                  />
                </S.GallerySearchInputContainer>
                <S.GallerySearchButton>Search</S.GallerySearchButton>
              </S.GallerySearchContainer>
            </Col>
            <Col span={2} offset={2}>
              <S.GalleryNewPostButton>
                <span style={{ marginRight: '1rem' }}>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                새 글 쓰기
              </S.GalleryNewPostButton>
            </Col>
          </Row>
        </Grid>
      </S.Gallery>
    </Layout>
  );
};

export default Gallery;
