import React from 'react';

import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import {createStore} from 'redux'

import App from './App';

import reducer from './store/FolderList/reducer'

import registerServiceWorker from './registerServiceWorker';

import './reset.css'

const tree = {
    "0": {
        "title": "父级1",
        "status": true,
        "dataId": "0",
        "children": [],
        "parentId":"0"
    }
}

const store = createStore(reducer, tree)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
;
registerServiceWorker();
