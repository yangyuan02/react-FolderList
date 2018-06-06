import * as FolderList from './action-type'

export default (state = {}, action) => {
  switch (action.type) {
    case FolderList.SELECT:
      return { ...state, ...{ index: action.index } }
    case FolderList.ADD:
      var len = state[state.index].children.length
      const name = len > 0? (state[state.index].children[len-1] + '-1'):(state.index + '-1')
      console.log(name)
      const newObj = {
        children: [],
        dataId: name,
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
      console.log(newState)
      return newState;
    default:
      return state
  }
}