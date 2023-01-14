import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export function PageContent({ children }) {
  return (
    <main className="bg-dark flex-grow-1">
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col lg="9">{children}</Col>
        </Row>
      </Container>
    </main>
  );
}
PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};
