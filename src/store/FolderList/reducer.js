import * as FolderList from './action-type'

export default (state = {}, action) => {
  switch (action.type) {
    case FolderList.SELECT:
      return { ...state, ...{ index: action.index } }
    case FolderList.ADD:
      var len = state[state.index].children.length

      const name = len > 0 ? (state[state.index].children[len - 1] + '-' + parseInt(state[state.index].children[len - 1].substring(state[state.index].children[len - 1].lastIndexOf("-") + 1)) + 1) : (state.index + '-1')
      const newObj = {
        children: [],
        dataId: name,
        parentId: state.index,
        title: action.data,
        status: false
      }
      const newState = {
        ...state, [state.index]: {
          ...state[state.index],
          children: state[state.index].children.concat(name)
        },
        [name]: newObj
      }
      return newState;
    case FolderList.DELETE: {

      const newState = { ...state }

      const newName = []

      function recurs(arr) {
        for (var i = 0; i < arr.length; i++) {
          if (newState[arr[i]].children.length > 0) {
            recurs(newState[arr[i]].children)
          }
          newName.push(arr[i])
        }
      }

      recurs(newState[newState.index].children)

      newName.push(newState.index)

      let parentId = newState[newState.index].parentId

      newState[parentId].children.splice(newState[parentId].children.indexOf(newState.index), 1)

      for (var i = 0; i < newName.length; i++) {
        delete newState[newName[i]];
      }

      console.log(newState)

      return newState
    }
    case FolderList.EDIT: {

      return {
        ...state, [state.index]: {
          ...state[state.index],
          title: action.data
        }
      }
    }
    default:
      return state
  }
}