import React, { Component } from 'react';

import { connect } from 'react-redux'

import * as actions from './store/FolderList/action'

import TouchableOpacity from './components/TouchableOpacity/index'

import FolderList from './components/FolderList/index'

import MarkTemplate from './components/MarkTemplate/index'

import CreateFolderBox from './components/CreateFolderBox/index'

class App extends Component {

  state = {
    showMark: false,
    parentObj:{}
  }

  add = () => {
    if(!this.props.index){
      alert("请选择父级")
      return false
    }
    this.setState({
      showMark: !this.state.showMark,
      parentObj : this.props[this.props.index]
    })

  }

  render() {
    return (
      <div className="box">
        <TouchableOpacity clickCallBack={this.add} text="创建" className="add" />
        <div className="folderList">
          <FolderList id={"1"} />
        </div>
        <MarkTemplate showMark={this.state.showMark} />
        <CreateFolderBox showMark={this.state.showMark} closeMarkCallBack={this.add} parentObj={this.state.parentObj}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return state

}
export default connect(mapStateToProps, actions)(App)

