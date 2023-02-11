import Container from '@mui/material/Container';
import { PropTypes } from 'prop-types';

const CONTAINER_STYLE = { height: 400, width: '100%' };

export function Page({ children }) {
  return (
    <Container fixed maxWidth="xl" sx={CONTAINER_STYLE}>
      {children}
    </Container>
  );
}
Page.propTypes = {
  children: PropTypes.node,
};
