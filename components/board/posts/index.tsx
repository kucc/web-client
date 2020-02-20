import Post from '../post';
import Pagination from '../pagiation-bar';
import usePosts from './hooks';

interface PostsProps {
  initialPosts;
}

const Posts: React.FC<PostsProps> = ({ initialPosts }) => {
  const { updatePage, posts, totalPostsCount } = usePosts(initialPosts);
  const Posts = () => {
    return posts.data.map((post, i) => <Post post={post} key={i} />);
  };
  return (
    <>
      <Posts />
      <Pagination numberOfPosts={totalPostsCount} updatePage={updatePage} />
    </>
  );
};

export default Posts;
