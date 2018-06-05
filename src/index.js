import React from 'react';

import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import {createStore} from 'redux'

import App from './App';

import reducer from './store/FolderList/reducer'

import registerServiceWorker from './registerServiceWorker';

import './reset.css'

const tree = {
    "1": {
        "title": "父级1",
        "status": true,
        "dataId": "1",
        "children": [
            "1-1",
            "1-2",
            "1-3"
        ]
    },
    "1-1-1-1": {
        "dataId": "1-1-1-1",
        "title": "父级1-子级1-子子子1",
        "status": false,
        "children":[]
    },
    "1-1-1": {
        "dataId": "1-1-1",
        "title": "父级1-子级1-子子级1",
        "status": true,
        "children": [
            "1-1-1-1"
        ]
    },
    "1-1-2": {
        "dataId": "1-1-2",
        "title": "父级1-子级1-子子级2",
        "status": false,
        "children":[]
    },
    "1-1-3": {
        "dataId": "1-1-3",
        "title": "父级1-子级1-子子级3",
        "status": false,
        "children":[]
    },
    "1-1": {
        "title": "父级1-子级1",
        "status": true,
        "dataId": "1-1",
        "children": [
            "1-1-1",
            "1-1-2",
            "1-1-3"
        ]
    },
    "1-2": {
        "dataId": "1-2",
        "title": "父级1-子级1",
        "status": false,
        "children":[]
    },
    "1-3-1": {
        "dataId": "1-3-1",
        "title": "父级1-子级1-子子级1",
        "status": false,
        "children":[]
    },
    "1-3-2": {
        "dataId": "1-3-2",
        "title": "父级1-子级1-子子级2",
        "status": false,
        "children":[]
    },
    "1-3-3": {
        "dataId": "1-3-3",
        "title": "父级1-子级1-子子级3",
        "status": false,
        "children":[]
    },
    "1-3": {
        "dataId": "1-3",
        "title": "父级1-子级2",
        "status": true,
        "children": [
            "1-3-1",
            "1-3-2",
            "1-3-3"
        ]
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
