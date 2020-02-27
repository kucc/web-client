import Post from '../post';

interface PostsProps {
  posts;
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const Posts = () => {
    return posts ? posts.map((post, i) => <Post post={post} key={i} />) : null;
  };
  return (
    <>
      <Posts />
    </>
  );
};

export default Posts;
