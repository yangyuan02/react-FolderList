import React, { Component } from 'react';

import {connect} from 'react-redux'

import PropTypes from 'prop-types';

import {list,getData} from './store/FolderList/action'

import TouchableOpacity from './components/TouchableOpacity/index'

import FolderList from './components/FolderList/index'

import MarkTemplate from './components/MarkTemplate/index'

import CreateFolderBox from './components/CreateFolderBox/index'

import './reset.css'

class App extends Component {
  static propTypes = {
    proData: PropTypes.object.isRequired,
    list: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired
  }
  state = {
    showMark : false
  }

  add = () => {
    console.log(this.props.proData.list)
    this.setState({
      showMark : !this.state.showMark
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
        <CreateFolderBox showMark={this.state.showMark} closeMarkCallBack={this.add} />
      </div>
    );
  }
}

export default connect(state =>({
  proData:state.proData
}),{
  list,
  getData
})(App);