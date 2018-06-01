import * as FolderList from './action-type'

import Immutable from 'immutable'

const defaultState = {
    list:{}
}

export const proData = (state = defaultState , action = {}) => {
    switch(action.type){
        case FolderList.GETDATA:
            return {...state,...action}
        case FolderList.ADD:
           return {...state,...action.data}
        default:
            return state
    }
}