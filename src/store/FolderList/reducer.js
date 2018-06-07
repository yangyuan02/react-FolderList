import * as FolderList from './action-type'

export default (state = {}, action) => {
  switch (action.type) {
    case FolderList.SELECT:
      return { ...state, ...{ index: action.index } }
    case FolderList.ADD:
      var len = state[state.index].children.length
      
      const name = len > 0 ? (state[state.index].children[len - 1] + '-' + parseInt(state[state.index].children[len - 1].substring(state[state.index].children[len - 1].lastIndexOf("-")+1))+1) : (state.index + '-1')
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
      return newState;
    case FolderList.DELETE: {
      
      console.log(state[state.index].children)
      console.log(state)
      return {...state}
    }
    case FolderList.EDIT:{

      return {...state , [state.index]:{
        ...state[state.index],
        title:action.data
      } }
    }
    default:
      return state
  }
}