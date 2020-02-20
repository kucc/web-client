import Post from '../post';
import Pagination from '../pagiation-bar';
import usePosts from './hooks';

interface PostsPerPageProps {
  initialPosts;
}

const PostsPerPage: React.FC<PostsPerPageProps> = ({ initialPosts }) => {
  const { getPost, updatePage, posts, totalPostsCount } = usePosts(
    initialPosts,
  );
  const Posts = () => {
    return posts.data.map((post, i) => (
      <Post getPost={getPost} post={post} key={i} />
    ));
  };
  return (
    <>
      <Posts />
      <Pagination numberOfPosts={totalPostsCount} updatePage={updatePage} />
    </>
  );
};

export default PostsPerPage;
