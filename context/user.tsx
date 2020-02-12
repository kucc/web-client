import { createContext, useReducer, useContext } from 'react';
import { User } from '../views/App/interface/User';

export const UserStateContext = createContext(null);
export const UserDispatchContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return null;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserProvider = ({ children, user }) => {
  const [state, dispatch] = useReducer(reducer, user);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        <UserStateContext.Consumer>{children}</UserStateContext.Consumer>
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUser = (): User => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
