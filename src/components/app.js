import React from "react";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Route, Switch } from "react-router-dom";
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { getCookie } from "../lib/utils";
//Components

const isModal = getCookie('modal');
const token = localStorage.getItem('token');
const user = store.getState().loginReducer.user;

if (user.lenght > 0 && token) {
   store.dispatch({type:"AUTH_USER", user:user});
}else{
  localStorage.removeItem('token');
}

export class App extends React.Component{  
render() {
  
  return (
    <Provider store={store}>
     <Router history={browserHistory}>
        <Route component={Main}>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path="/itemList" component={ItemList}/>
          </div>
        </Route>
    </Router>
  </Provider>
  )};

};

export default App ;
