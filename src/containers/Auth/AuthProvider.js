import { PropTypes } from 'prop-types';
import { useMemo, useState } from 'react';

import { AuthCtx } from '/src/contexts';

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const ctx = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return <AuthCtx.Provider value={ctx}>{children}</AuthCtx.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
