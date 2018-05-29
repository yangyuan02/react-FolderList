import React, { Component } from 'react';

import propTypes from 'prop-types'

import './index.less'

class FolderList extends Component {
  static propTypes = {
    list: propTypes.object
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
    return (
      <ul>
        <li>
          <div className="title">
            <i className="iconfont">&#xe619;</i>
            <span>{this.props.list.title}</span>
          </div>
          {this.nodes(this.props.list)}
        </li>
      </ul>
    );

  }
}

export default FolderList;