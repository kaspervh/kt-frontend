import {Navbar, Container, Nav} from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
        
        <Container>
        <Navbar.Brand href="/">Killteam-Builder</Navbar.Brand>
        <Nav></Nav>
        <Nav>
        <Nav.Link href="/signup">Sign up</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
      

  )
}

export default NavbarComponent