import styled from 'styled-components';
import PostSingle from './PostSingle';

const PostsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--gap);
`;

const Posts = ({ posts, ...props }) => {
  return (
    <PostsSC>
      {posts && posts.length > 0 ? (
        posts?.map((p) => <PostSingle key={p._id} post={p} {...props} />)
      ) : (
        <p>No posts...</p>
      )}
    </PostsSC>
  );
};

export default Posts;
