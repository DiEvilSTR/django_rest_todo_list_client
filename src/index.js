import { IS_DEV_MODE, IS_PRODUCTION_MODE, IS_TEST_MODE } from './common';

console.log('ENV', { IS_DEV_MODE, IS_TEST_MODE, IS_PRODUCTION_MODE });

if (module.hot) {
  module.hot.accept();
}
