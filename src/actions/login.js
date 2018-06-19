export function loginHasErrored(bool) {
    return {
        type: 'LOGIN_HAS_ERRORED',
        hasErrored: bool
    };
}

export function loginIsInProgress(bool) {
    return {
        type: 'LOGIN_IS_IN_PROGRESS',
        isLoading: bool
    };
}

export function loginFetchDataSuccess(items) {
    return {
        type: 'LOGIN_FETCH_DATA_SUCCESS',
        items
    };
}


export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
