






export function loginHasErrored(state = false, action) {
    switch (action.type) {
        case 'LOGIN_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function loginIsInProgress(state = false, action) {
    switch (action.type) {
        case 'LOGIN_IS_IN_PROGRESS':
            return action.isLoading;

        default:
            return state;
    }
}





export function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_FETCH_DATA_SUCCESS':
        console.log("llore10"+action.items.id);
      
            return action.items;  


        default:
            return state;
    }


    
}
