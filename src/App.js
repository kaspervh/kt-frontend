import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element="HomeComponent" />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
