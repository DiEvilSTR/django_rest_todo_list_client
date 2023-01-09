const { NODE_ENV } = process.env;

export const IS_DEV_MODE = NODE_ENV === 'development';
export const IS_TEST_MODE = NODE_ENV === 'test';
export const IS_PRODUCTION_MODE = !IS_DEV_MODE && !IS_TEST_MODE;
