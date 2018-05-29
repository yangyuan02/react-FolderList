import React, { Component } from 'react';

import TouchableOpacity from './components/TouchableOpacity/index'

import FolderList from './components/FolderList/index'

import { tree } from './data.js'

import './reset.css'

class App extends Component {
  add = () => {
    console.log(111)
  }
  render() {
    return (
      <div className="box">
        <TouchableOpacity clickCallBack={this.add} text="创建" className="add" />
        <div className="folderList">
          <FolderList list={tree} />
        </div>
      </div>
    );
  }
}

export default App;