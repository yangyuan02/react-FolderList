import * as FolderList from './action-type'


export const select = index => {
    return {
        type: FolderList.SELECT,
        index
    }
}

// export const getData = data => {
//     return {
//         type: FolderList.GETDATA,
//         list:tree
//     }
// }