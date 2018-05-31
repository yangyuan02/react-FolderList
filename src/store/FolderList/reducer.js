import * as FolderList from './action-type'

const defaultState = {
    list:[]
}

export const formData = (state = defaultState , action = {}) => {
    switch(action.type) {
        case FolderList.LIST:
            return {...state};
        default:
            return state
    }
}