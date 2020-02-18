import * as S from './styles';
import Link from 'next/link';

interface PostProps {
  post;
  getPost;
}

const Post: React.FC<PostProps> = ({ post, getPost }) => {
  return (
    <Link
      href={{ pathname: '/board/[id]', query: { postId: post.Id } }}
      as={`/board/${post.Id}`}
    >
      <S.BoardPost onClick={() => getPost(post.Id)}>
        <S.BoardIndexAuthor>{post.userId}</S.BoardIndexAuthor>
        <S.BoardIndexTitle>{post.title}</S.BoardIndexTitle>
        <S.BoardIndexLikes>{post.likes}</S.BoardIndexLikes>
        <S.BoardIndexDate>{post.createdAt.substring(0, 10)}</S.BoardIndexDate>
        <S.BoardIndexViews>{post.view}</S.BoardIndexViews>
      </S.BoardPost>
    </Link>
  );
};

export default Post;
