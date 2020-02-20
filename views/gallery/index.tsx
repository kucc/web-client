import { NextPage } from 'next';
import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import GalleryImage from '../../components/gallery/gallery-image';

const Gallery: NextPage = () => (
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
      </Grid>
    </S.Gallery>
  </Layout>
);

export default Gallery;
