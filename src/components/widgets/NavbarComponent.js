import {Navbar, Container, Nav} from 'react-bootstrap'
import { useSelector } from 'react-redux'
 
function NavbarComponent() {
  const user = useSelector(state => state.SessionReducer)

  return (
    <Navbar bg="dark" variant="dark">
        
        <Container>
        <Navbar.Brand href="/">Killteam-Builder</Navbar.Brand>
        <Nav>
          {(!!user && !!user.token) && 
            <div>
              <Nav.Link href="/rosters/index">My teams</Nav.Link>
            </div>
          }
        </Nav>
        <Nav>
          <Nav.Link href="/signup">Sign up</Nav.Link>
          <Nav.Link href="/login">Log in</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
      

  )
}

export default NavbarComponent