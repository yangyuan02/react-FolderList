import React, { Component } from 'react';

import TouchableOpacity from './components/TouchableOpacity/index'

import FolderList from './components/FolderList/index'

import MarkTemplate from './components/MarkTemplate/index'

import { tree } from './data.js'

import './reset.css'

class App extends Component {

  state = {
    showMark : false
  }

  add = () => {
    this.setState({
      showMark : true
    })
  }

  render() {
    return (
      <div className="box">
        <TouchableOpacity clickCallBack={this.add} text="创建" className="add" />
        <div className="folderList">
          <FolderList list={tree} />
          <FolderList list={tree} />
        </div>
        <MarkTemplate showMark={this.state.showMark}/>
      </div>
    );
  }
}

export default App;