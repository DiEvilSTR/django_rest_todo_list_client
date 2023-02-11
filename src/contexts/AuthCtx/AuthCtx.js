import { createContext } from 'react';

const DEFAULT_CTX_VALUE = { currentUser: null, setCurrentUser: null };

export const AuthCtx = createContext(DEFAULT_CTX_VALUE);
