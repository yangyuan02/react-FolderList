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

export const del = () => {
    return {
        type: FolderList.DELETE
    }
}

export const edit = data => {
    return {
        type: FolderList.EDIT,
        data
    }
}
