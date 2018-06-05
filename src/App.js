import React, { Component } from 'react';

import { connect } from 'react-redux'

import PropTypes from 'prop-types';

import { denormalize, schema, normalize } from 'normalizr';

import { add, getData } from './store/FolderList/action'

import TouchableOpacity from './components/TouchableOpacity/index'

import FolderList from './components/FolderList/index'

import MarkTemplate from './components/MarkTemplate/index'

import CreateFolderBox from './components/CreateFolderBox/index'

import { tree } from './data.js'

import './reset.css'

const data = tree;

const node = new schema.Entity('node', {}, { idAttribute: 'dataId' });

node.define({ children: [node] });

const normalizedData = normalize(data, node);


class App extends Component {
  static propTypes = {
    // proData: PropTypes.object.isRequired,
    // add: PropTypes.func.isRequired,
    // getData: PropTypes.func.isRequired
  }
  state = {
    showMark: false,
    active: {
      title: '',
      dataId: ''
    }
  }

  add = () => {
    var active = JSON.parse(window.localStorage.getItem("active"))
    if (!active) {
      return false
    }
    this.setState({
      showMark: !this.state.showMark,
      active: {
        title: active.title,
        dataId: active.dataId
      }
    })
  }

  // componentDidMount() {
  //   if (!this.props.proData.length) {
  //     this.props.getData()
  //   }
  // }

  render() {
    return (
      <div className="box">
        <TouchableOpacity clickCallBack={this.add} text="创建" className="add" />
        <div className="folderList">
          <FolderList list={1} />
        </div>
        <MarkTemplate showMark={this.state.showMark} />
        <CreateFolderBox showMark={this.state.showMark} closeMarkCallBack={this.add} text={this.state.active} />
      </div>
    );
  }
}

export default App