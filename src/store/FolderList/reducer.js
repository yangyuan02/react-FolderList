// import * as FolderList from './action-type'

// import Immutable from 'immutable'

// const defaultState = {
//     list:{}
// }

// export const proData = (state = defaultState , action = {}) => {
//     switch(action.type){
//         case FolderList.GETDATA:
//             return {...state,...action}
//         case FolderList.ADD:
//            return {...state,...action.data}
//         default:
//             return state
//     }
// }


export default (state = {}, action) => {



    // const { nodeId } = action
    // if (typeof nodeId === 'undefined') {
    //   return state
    // }
  
    // if (action.type === DELETE_NODE) {
    //   const descendantIds = getAllDescendantIds(state, nodeId)
    //   return deleteMany(state, [ nodeId, ...descendantIds ])
    // }
  
    return {
      ...state,
      // [nodeId]: node(state[nodeId], action)
    }
  }