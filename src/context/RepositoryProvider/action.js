import * as types from './types';
export const loadAllRepository = async (dispatch, user) => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    console.log(data);
    return () => dispatch({ type: types.ALL_REPOSITORY_SUCCESS, payload: data });
};
