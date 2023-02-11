import { IS_DEV_MODE, IS_PRODUCTION_MODE, IS_TEST_MODE } from './env';

describe('ENV', () => {
  it('Should return environmant variables', () => {
    expect(IS_DEV_MODE).toBe(false);
    expect(IS_PRODUCTION_MODE).toBe(false);
    expect(IS_TEST_MODE).toBe(true);
  });
});
