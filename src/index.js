import {store} from './store/configurestore'
import {Provider} from 'react-redux';
import Routes from './router/approuter'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/comp/App';
import './firebase/firebase'
import   StartsetOptions from   './actions/action'
import * as serviceWorker from './serviceWorker';


const jsx=(
    <Provider store={store}>
        <Routes />
    </Provider>
)
let state=false;
const change=()=>{
if(!state)
{ReactDOM.render(jsx, document.getElementById('root'));

    state=true;
}

}

ReactDOM.render(<p>loading...</p>, document.getElementById('root'));
store.dispatch(StartsetOptions()).then(()=>{
       change();

})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
