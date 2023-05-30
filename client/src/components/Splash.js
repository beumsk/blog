import styled from 'styled-components';

const Cont = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.h1`
  /* margin-top: 0; */
`;
const Image = styled.img``;

const Splash = ({ title, src, alt }) => {
  return (
    <Cont>
      <Title>{title}</Title>
      <Image src={src} alt={alt || 'Give an alt text!'} />
    </Cont>
  );
};

export default Splash;
