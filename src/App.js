import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' exact element={<HomeComponent/>}/>
        
      </Routes>
    </Container>
 
    
  );
}

export default App;
