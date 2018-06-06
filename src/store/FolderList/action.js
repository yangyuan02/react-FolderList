import * as FolderList from './action-type'


export const select = index => {
    return {
        type: FolderList.SELECT,
        index
    }
}

export const add = data => {
    return {
        type: FolderList.ADD,
        data
    }
}