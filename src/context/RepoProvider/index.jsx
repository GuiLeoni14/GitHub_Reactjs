import { useReducer } from 'react';
import { reducer } from './reducer';
import P from 'prop-types';
import { data } from './data';
import { AllRepositoryContext } from './context';
export default function AllRepositoryProvider({ children }) {
    const [stateAllRepository, allRepositoryDispatch] = useReducer(reducer, data);
    return (
        <AllRepositoryContext.Provider value={{ stateAllRepository, allRepositoryDispatch }}>
            {children}
        </AllRepositoryContext.Provider>
    );
}

AllRepositoryProvider.propTypes = {
    children: P.node.isRequired,
};
