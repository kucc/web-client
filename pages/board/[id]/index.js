import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    // 개별 POST 페이지
    <Layout>
      <h1> Post: {id}</h1>
    </Layout>
  );
};

export default Post;
