import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        const store = React.useMemo(() => ({ state, ...boundActions }), [state])
        return <Context.Provider value={store}>{children}</Context.Provider>
    }
    return { Context, Provider }
};

