import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Body = styled.div`
  max-width: 80ch;
  margin: 16px auto;
`;
const Title = styled.h1`
  &::first-letter {
    text-transform: uppercase;
  }
`;
const Image = styled.img``;
const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 32px;
`;
const Text = styled.div`
  margin-bottom: 32px;
`;
const Cats = styled.div``;
const Cat = styled(Link)`
  margin-right: 4px;
`;

const Post = () => {
  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  // console.log(location.state);
  const post = location.state;
  const dateSplit = new Date(post?.createdAt)?.toDateString()?.split(' ');
  const date = `${dateSplit[2]} ${dateSplit[1]} ${dateSplit[3]}`;

  return (
    <>
      <Image
        src={post?.photo || 'https://picsum.photos/800/200'}
        alt={post?.title}
      />
      <Body>
        <Title>{post?.title}</Title>
        <Meta>
          <span>By {post?.username}</span>
          <time>{date}</time>
        </Meta>
        <Text>{post?.desc}</Text>
        <Cats>
          {post?.categories?.map((c) => (
            <Cat key={c} to={`/blog?cat=${c}`}>
              {c}
            </Cat>
          ))}
        </Cats>
      </Body>
    </>
  );
};

export default Post;
