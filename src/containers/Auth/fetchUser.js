import { EMPTY_OBJECT, HTTP_METHOD } from '/src/constants';
import { isNonEmptyString, requestData } from '/src/utils';

export function fetchUser(params) {
  const { username } = params || EMPTY_OBJECT;

  const shouldFetchOtherUser = isNonEmptyString(username);
  const url = shouldFetchOtherUser ? `user/details/${username}` : 'user/details';

  return requestData({
    method: HTTP_METHOD.get,
    url,
  });
}
