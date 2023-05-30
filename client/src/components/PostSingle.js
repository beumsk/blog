import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostSC = styled.div`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px;
  overflow: hidden;
`;
const Image = styled.img`
  /* border-radius: 4px 4px 0 0; */
`;
const Info = styled.div`
  padding: 8px;
`;
const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.5em;
  text-decoration: none;
`;
const Time = styled.div`
  font-size: 0.75rem;
  margin-bottom: 0.5em;
`;
const Desc = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Comp = ({ post, detailed }) => {
  const slug = post?.title?.replaceAll(' ', '-');
  const dateSplit = new Date(post?.createdAt)?.toDateString()?.split(' ');
  const date = `${dateSplit[2]} ${dateSplit[1]} ${dateSplit[3]}`;

  return (
    <PostSC>
      <Link
        to={`/blog/${slug}`}
        state={{ ...post }}
        style={{ textDecoration: 'none' }}>
        <Image
          src={post?.photo || 'https://picsum.photos/400/200'}
          alt={post?.title}
        />
        <Info>
          <Title>{post?.title}</Title>
          {detailed && (
            <>
              <Time>{date}</Time>
              <Desc>{post?.desc}</Desc>
            </>
          )}
        </Info>
      </Link>
    </PostSC>
  );
};

export default Comp;
