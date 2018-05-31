import * as FolderList from './action-type'

import { tree } from '../../data.js'

export const add = data => {
    console.log(data)
    return {
        type: FolderList.ADD,
        data
    }
}

export const getData = data => {
    return {
        type: FolderList.GETDATA,
        list:tree
    }
}