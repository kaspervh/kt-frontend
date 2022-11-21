import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'

import NavbarComponent from './components/widgets/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Container>
        <Routes>
          <Route path='/' exact element={<HomeComponent/>}/>
          <Route path='/login' exact element={<LoginComponent/>} />
          <Route path='/Signup' exact element={<SignupComponent/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
