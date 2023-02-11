import { PropTypes } from 'prop-types';
import { useContext } from 'react';

import { Page, PageContentLoader } from '/src/components';
import { AuthCtx } from '/src/contexts';
import { useRequest } from '/src/hooks';

import { fetchUser } from './fetchUser';
import { LoginForm } from './LoginForm';

export function Auth({ children }) {
  const { currentUser } = useContext(AuthCtx);

  const queryState = useRequest('CurrentUser', fetchUser);

  const { isLoading } = queryState;

  if (isLoading) {
    return (
      <Page>
        <PageContentLoader />
      </Page>
    );
  }

  if (!currentUser) {
    return <LoginForm />;
  }

  return children;
}
Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
