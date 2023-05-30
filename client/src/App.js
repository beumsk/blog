import './App.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Main = styled.main`
  padding: 40px var(--gap);
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
