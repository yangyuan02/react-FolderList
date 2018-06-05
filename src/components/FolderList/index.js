import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../../store/FolderList/action'


import './index.less'

class FolderList extends Component {


  state = {
    visible: this.props.id.status
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  renderChild = childId => {

    return <ConnectedNode id={childId} key={childId} />

  }

  render() {
    var style = {
      display: this.state.visible ? 'block' : 'none'
    }

    const { title, children } = this.props

    return (
      <ul>
        <li>
          <div className="title" onClick={this.toggle}>
            <i className="iconfont">&#xe619;</i>
            <span>{title}</span>
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