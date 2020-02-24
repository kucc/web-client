import Post from '../post';
import Pagination from '../pagiation-bar';
import usePosts from './hooks';

interface PostsProps {
  initialPosts;
  postTypeId;
}

const Posts: React.FC<PostsProps> = ({ initialPosts, postTypeId }) => {
  const { updatePage, posts, totalPostsCount } = usePosts({
    initialPosts,
    postTypeId,
  });
  const Posts = () => {
    return posts
      ? posts.data.map((post, i) => <Post post={post} key={i} />)
      : null;
  };
  return (
    <>
      <Posts />
      <Pagination
        numberOfPosts={totalPostsCount}
        updatePage={updatePage}
        postTypeId={postTypeId}
      />
    </>
  );
};

export default Posts;
