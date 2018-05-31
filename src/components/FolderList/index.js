import React, { Component } from 'react';

import propTypes from 'prop-types'

import './index.less'

class FolderList extends Component {
  static propTypes = {
    list: propTypes.object
  }
  state = {
    visible : this.props.list.status
  }
  toggle = index => {
    console.log(index)
    this.setState({
      visible : !this.state.visible
    })
  }

  nodes = (data) =>{  
    let childNode;
    if(data.status){
      childNode = data.children.map((node,index) => {
        return <FolderList list={node} key={index} />
      })
    }
    return childNode
  }

  render() {
    var style = {
      display:this.state.visible?'none':'block'
    }
    return (
      <ul>
        <li>
          <div className="title" onClick={this.toggle.bind(this,1)}>
            <i className="iconfont">&#xe619;</i>
            <span>{this.props.list.title}</span>
          </div>
          <div className="childnode" style={style}>
            {this.nodes(this.props.list)}
          </div>
        </li>
      </ul>
    );

  }
}

export default FolderList;