import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Title = styled.h1``;
const Main = styled.main`
  text-align: center;
  padding: 40px var(--gap);
`;

const P404 = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="App">
      <Header />
      <Main>
        <Title>404</Title>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Main>
      <Footer />
    </div>
  );
};

export default P404;
