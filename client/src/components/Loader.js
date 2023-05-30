import styled from 'styled-components';

const LoaderSC = styled.div`
  width: 32px;
  height: 32px;
  border: solid 6px #ddd;
  border-top-color: black;
  border-radius: 9999px;
  animation: loading infinite 1s;
  margin: auto;
  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ ...props }) => {
  return <LoaderSC {...props} />;
};

export default Loader;
