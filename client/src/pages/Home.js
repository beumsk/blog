import styled from 'styled-components';
import Splash from '../components/Splash';
import Posts from '../components/Posts';
import Loader from '../components/Loader';
import { useFetch } from '../useFetch';

export const URL = 'http://localhost:5000/api/';

const Title = styled.h1``;

const Home = () => {
  const { data: posts, loading, error } = useFetch(URL + 'posts');

  if (error) console.log(error);

  return (
    <>
      <Splash title="Home" src="https://picsum.photos/800/200" />
      {loading ? <Loader /> : <Posts posts={posts} />}
    </>
  );
};

export default Home;
