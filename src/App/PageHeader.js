import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const mockUser = {
  username: 'Envy',
};

export function PageHeader() {
  return (
    <header className="border-bottom bg-dark">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="9">
            <Navbar variant="dark">
              <Link className="navbar-brand" to="/">
                To-Do List
              </Link>

              <Nav className="ms-auto">
                <Link className="navbar-brand" to={`/user/${mockUser.username}`}>
                  {mockUser.username}
                </Link>

                <Nav.Item>
                  <Button variant="outline-light">Log out</Button>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
