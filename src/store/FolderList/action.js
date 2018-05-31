import * as FolderList from './action-type'

import { tree } from '../../data.js'

export const list = data => {
    return {
        type: FolderList.LIST,
        data
    }
}

export const getData = data => {
    return {
        type: FolderList.GETDATA,
        list:tree
    }
}