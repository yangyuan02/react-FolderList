import React, { Component } from 'react';

import {connect} from 'react-redux'

import PropTypes from 'prop-types';

import {add,getData} from './store/FolderList/action'

import TouchableOpacity from './components/TouchableOpacity/index'

import FolderList from './components/FolderList/index'

import MarkTemplate from './components/MarkTemplate/index'

import CreateFolderBox from './components/CreateFolderBox/index'

import './reset.css'

class App extends Component {
  static propTypes = {
    proData: PropTypes.object.isRequired,
    add: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired
  }
  state = {
    showMark : false,
    active:{
      title:'',
      dataId:''
    }
  }

  add = () => {
    var active = JSON.parse(window.localStorage.getItem("active"))
    if(!active){
      return false
    }
    this.setState({
      showMark : !this.state.showMark,
      active:{
        title:active.title,
        dataId:active.dataId
      }
    })
  }

  componentDidMount(){
    if(!this.props.proData.length){
      this.props.getData()
    }
  }

  render() {
    return (
      <div className="box">
        <TouchableOpacity clickCallBack={this.add} text="创建" className="add" />
        <div className="folderList">
          <FolderList list={this.props.proData.list} />
        </div>
        <MarkTemplate showMark={this.state.showMark} />
        <CreateFolderBox showMark={this.state.showMark} closeMarkCallBack={this.add} text={this.state.active}/>
      </div>
    );
  }
}

export default connect(state =>({
  proData:state.proData
}),{
  add,
  getData
})(App);