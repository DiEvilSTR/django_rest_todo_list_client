import axios from 'axios';

import { BACKEND_API_ENDPOINT } from '/src/constants';

export function requestData({ data, method, url }) {
  return axios({
    data,
    method,
    url: `${BACKEND_API_ENDPOINT}/${url}`,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
  });
}
