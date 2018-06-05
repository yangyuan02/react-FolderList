import * as FolderList from './action-type'

export default (state = {}, action) => {
    switch(action.type){
      case FolderList.SELECT:
        return {...state,...{index:action.index}}
      default: 
        return state
    }
  }