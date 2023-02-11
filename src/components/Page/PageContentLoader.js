// import { PropTypes } from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

import { ALIGN, Flex } from '/src/components';

export function PageContentLoader() {
  return (
    <Flex vertical align={ALIGN.center}>
      <CircularProgress />
    </Flex>
  );
}
PageContentLoader.propTypes = {};
