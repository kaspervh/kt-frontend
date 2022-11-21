import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'

import NavbarComponent from './components/widgets/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import RostersComponent from './components/rosters/RostersComponent';
import ShowRosterComponent from './components/rosters/ShowRosterComponent';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Container>
        <Routes>
          <Route path='/' exact element={<HomeComponent/>}/>
          <Route path='/login' exact element={<LoginComponent/>} />
          <Route path='/signup' exact element={<SignupComponent/>} />
          <Route path='/rosters/index' exact element={<RostersComponent/>}/>
          <Route path='/rosters/show/:index' exact element={<ShowRosterComponent/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
