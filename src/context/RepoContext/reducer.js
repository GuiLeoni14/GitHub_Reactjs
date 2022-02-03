import * as type from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case type.ALL_REPOSITORY_SUCCESS:
            return { ...state, all_repository: action.payload, loading: false };
        case type.ALL_REPOSITORY_LOADING:
            return { ...state, loading: true };
    }
    console.log('Não encontrei a action', action.type);
    return { ...state };
};
