import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../../store/FolderList/action'
import propTypes from 'prop-types'

import './index.less'

class FolderList extends Component {
  static propTypes = {
    list: propTypes.string
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

  renderChild = childId => {

    return <ConnectedNode list={childId} key={childId} />
    
  }

  render() {
    var style = {
      display:this.state.visible?'none':'block'
    }

    const { title,children } = this.props
    console.log(this.props)
    return (
      <ul>
        <li>
          <div className="title" onClick={this.toggle.bind(this,this.props.list)} data-id={this.props.list.dataId}>
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
  return state[ownProps.list]
}

const ConnectedNode = connect(mapStateToProps, actions)(FolderList)
export default ConnectedNode