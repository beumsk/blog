import styled from 'styled-components';

const FooterSC = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  padding: 24px var(--gap);
  margin-top: auto;
  font-size: 0.75rem;
`;

const Footer = () => {
  return <FooterSC>© Blog - {new Date().getFullYear()}</FooterSC>;
};

export default Footer;
