import { useContext } from 'react';
import { useQuery } from 'react-query';

import { HTTP_STATUS_CODE } from '/src/constants';
import { AuthCtx } from '/src/contexts';

export function useRequest(...paramList) {
  const { setCurrentUser } = useContext(AuthCtx);

  // TODO: Fix redundant requests
  const queryState = useQuery(...paramList);

  if (queryState.error?.response.status === HTTP_STATUS_CODE.unauthorized) {
    setCurrentUser(null);
  }

  return queryState;
}
