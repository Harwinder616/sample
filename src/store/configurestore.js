import fullData from '../reducers/fulldata'
import {createStore} from 'redux';
import{applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
const enhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore=()=>{
    const store=createStore(fullData,enhancers(applyMiddleware(thunk)));
    return store;
}

var store=configureStore();
export{store,configureStore as default}