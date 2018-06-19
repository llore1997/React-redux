import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { login, loginHasErrored, loginIsInProgress } from './login';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    login,
    loginHasErrored,
    loginIsInProgress
});
