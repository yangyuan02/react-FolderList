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

export const del = index => {
    return {
        type: FolderList.DELETE,
        index
    }
}

export const edit = data => {
    console.log(data)
    return {
        type: FolderList.EDIT,
        data
    }
}
