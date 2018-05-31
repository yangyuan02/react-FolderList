import * as FolderList from './action-type'

export const list = data => {
    return {
        type: FolderList.LIST,
        data
    }
}