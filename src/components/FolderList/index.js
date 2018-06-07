import React, { Component } from 'react';

import { connect } from 'react-redux'

import * as actions from '../../store/FolderList/action'


import './index.less'

class FolderList extends Component {

  state = {
    visible: this.props.id.status
  }

  toggle = (id) => {
    const { select } = this.props
    select(id)
    this.setState({
      visible: !this.state.visible
    })
  }

  edit = (event) => {
    event.stopPropagation()
    const { select, dataId ,showCallBack } = this.props
    select(dataId)
    setTimeout(()=>{
      showCallBack(1)
    },0)
  }

  del = (event) => {

    const { select, dataId ,del } = this.props

    event.stopPropagation()

    select(dataId)

    del()

  }


  renderChild = childId => {

    return <ConnectedNode id={childId} key={childId} showCallBack={this.props.showCallBack}/>

  }

  render() {

    var style = {
      display: this.state.visible ? 'block' : 'none'
    }

    const { title, children, dataId } = this.props

    return (
      <ul>
        <li>
          <div className="title" onClick={this.toggle.bind(this, dataId)} data-id={dataId}>
            <div>
              <i className="iconfont">&#xe619;</i>
              <span>{title}</span>
            </div>
            <div className="del">
              <i className="iconfont" onClick={this.del}>&#xe607;</i>
              <i className="iconfont" onClick={this.edit}>&#xe609;</i>
            </div>
          </div>
          <div className="childnode" style={style}>
            {children.map(this.renderChild)}
          </div>
        </li>
      </ul>
    );

  }
}

function mapStateToProps(state, ownProps) {

  return state[ownProps.id]

}

const ConnectedNode = connect(mapStateToProps, actions)(FolderList)
export default ConnectedNode