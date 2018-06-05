import React, { Component } from 'react';

import TouchableOpacity from './components/TouchableOpacity/index'

import FolderList from './components/FolderList/index'

import MarkTemplate from './components/MarkTemplate/index'

import CreateFolderBox from './components/CreateFolderBox/index'

class App extends Component {

  state = {
    showMark: false
  }

  add = () => {
    this.setState({
      showMark: !this.state.showMark
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
        <CreateFolderBox showMark={this.state.showMark} closeMarkCallBack={this.add} />
      </div>
    );
  }
}

export default App