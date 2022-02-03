import { useReducer } from 'react';
import { reducer } from './reducer';
import P from 'prop-types';
import { data } from './data';
export default function RepoContext({ children }) {
    const [stateAllRepository, allRepositoryDispatch] = useReducer(reducer, data);
    return (
        <RepoContext.Provider value={{ stateAllRepository, allRepositoryDispatch }}>{children}</RepoContext.Provider>
    );
}

RepoContext.propTypes = {
    children: P.node.isRequired,
};
