import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderSC = styled.header`
  position: sticky;
  top: 0;
  height: 40px;
  padding: 0 var(--gap);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

const Search = styled(FaSearch)`
  margin-left: 4px;
  font-size: 0.75rem;
`;

const Header = () => {
  const logged = true;

  return (
    <HeaderSC>
      <Left>
        <Link to="/">Home</Link>
      </Left>
      <Center>
        <Link to="/blog">Blog</Link>
      </Center>
      <Right>
        {logged ? (
          <>
            <Link to="/write">Write</Link>
            <Link to="/profile">Profile</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Search />
      </Right>
    </HeaderSC>
  );
};

export default Header;
