import styled from 'styled-components';
import Categories from '../components/Categories';
import Posts from '../components/Posts';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../useFetch';
import { URL } from './Home';

const Title = styled.h1``;

const Blog = () => {
  const { search } = useLocation();

  const {
    data: posts,
    loading,
    error,
  } = useFetch(`${URL}posts${search ? search : ''}`);

  if (error) console.log(error);

  return (
    <>
      <Title>Bloggg</Title>
      <Categories />
      {loading ? <Loader /> : <Posts posts={posts} detailed />}
    </>
  );
};

export default Blog;
