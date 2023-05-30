import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { URL } from '../pages/Home';
import Loader from './Loader';
import { useFetch } from '../useFetch';

const CategoriesSC = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const CategorySC = styled.div``;

const CatLink = styled(Link)`
  padding: 4px 8px;
`;

const Category = ({ name }) => {
  return (
    <CategorySC>
      <CatLink to={`/blog?cat=${name}`}>{name}</CatLink>
    </CategorySC>
  );
};

const Categories = () => {
  const { data: cats, loading, error } = useFetch(URL + 'categories');

  if (error) console.log(error);

  return (
    <CategoriesSC>
      {loading ? (
        <Loader />
      ) : (
        cats?.map((c) => <Category key={c._id} name={c.name} />)
      )}
    </CategoriesSC>
  );
};

export default Categories;
