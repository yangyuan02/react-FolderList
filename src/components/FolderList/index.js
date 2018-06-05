import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../../store/FolderList/action'
import propTypes from 'prop-types'

import './index.less'

class FolderList extends Component {
  static propTypes = {
    list: propTypes.number
  }
  state = {
    //
    visible : this.props.list.status
  }
  toggle = data => {
    window.localStorage.setItem("active",JSON.stringify(data))
    this.setState({
      visible : !this.state.visible
    })
  }

  nodes = (data) =>{ 
    let childNode;
    if(data.status){
      childNode = data.children.map((node,index) => {
        return <ConnectedNode list={node} key={index} />
      })
    }
    return childNode
  }

  render() {
    var style = {
      display:this.state.visible?'none':'block'
    }
    console.log(this.props)
    return (
      <ul>
        <li>
          <div className="title" onClick={this.toggle.bind(this,this.props.list)} data-id={this.props.list.dataId}>
            <i className="iconfont">&#xe619;</i>
            <span>{this.props.list.title}</span>
          </div>
          <div className="childnode" style={style}>
            {/* {this.nodes(this.props.list)} */}
          </div>
        </li>
      </ul>
    );

  }
}

function mapStateToProps(state, ownProps) {
  console.log(state)
  return state[ownProps.list]
}

const ConnectedNode = connect(mapStateToProps, actions)(FolderList)
export default ConnectedNode