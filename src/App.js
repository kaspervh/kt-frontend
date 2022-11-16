import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'

import NavbarComponent from './components/widgets/NavbarComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Container>
        <Routes>
          <Route path='/' exact element={<HomeComponent/>}/>
          
        </Routes>
      </Container>
    </div>
  );
}

export default App;
