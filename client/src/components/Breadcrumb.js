import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbSC = styled.div`
  display: flex;
  padding: 4px var(--gap);
  background-color: #ddd;
`;
const LinkSC = styled(Link)`
  font-size: 0.75rem;
`;
const Current = styled.span`
  font-size: 0.75rem;
`;

const Slash = styled.span`
  font-size: 0.75rem;
  margin-left: 4px;
  margin-right: 4px;
`;

const Breadcrumb = () => {
  const location = useLocation();

  if (location.pathname === '/') return;

  const split = location.pathname.split('/').filter((x) => x);

  return (
    <BreadcrumbSC>
      <LinkSC to="/">Home</LinkSC>
      {split.map((x, i) =>
        i !== split.length - 1 ? (
          <Fragment key={i}>
            <Slash>|</Slash>
            <LinkSC to={`/${x}`}>{x}</LinkSC>
          </Fragment>
        ) : (
          <Fragment key={i}>
            <Slash>|</Slash>
            <Current>{x}</Current>
          </Fragment>
        )
      )}
    </BreadcrumbSC>
  );
};

export default Breadcrumb;
