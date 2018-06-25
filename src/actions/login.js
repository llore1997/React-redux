
import { Login } from '../components/login';



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


var url = 'http://localhost:8000/api/login';
var data = {username: 'admin', password:'admin' };

export function loginFetchData(url) {
    return (dispatch) => {
        dispatch(loginIsInProgress(true));

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
            })
           // console.log("llore")
           .then(response => response.json())
           .catch(error => console.error('Error:', error))
           .then(response => console.log('Success:',dispatch(loginFetchDataSuccess(response))) );
           
    };
}
