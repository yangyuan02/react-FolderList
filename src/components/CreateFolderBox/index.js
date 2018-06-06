import React, { Component } from 'react';

import { connect } from 'react-redux'

import * as actions from '../../store/FolderList/action'

import propTypes from 'prop-types'

import TouchableOpacity from '../TouchableOpacity/index';

import './index.less'

class CreateFolderBox extends Component {

    static propTypes = {
        showMark: propTypes.bool.isRequired,
        closeMarkCallBack: propTypes.func,
        parentObj: propTypes.object,
        floderType:propTypes.number
    }

    state = {
        folderName: ''
    }

    handleChange = (event) => {
        if (event.target.value) {
            this.refs.input.style.borderColor = '#ccc'
        }
        this.setState({
            folderName: event.target.value
        })
    }

    confirm = () => {

        const { add } = this.props

        if (!this.state.folderName.toString()) {
            this.refs.input.style.borderColor = '#f44336'
            return false
        }
        add(this.state.folderName)
        this.cencel()
    }

    cencel = () => {
        this.setState({
            folderName: ''
        })
        this.props.closeMarkCallBack()
    }

    render() {

        return (
            this.props.showMark && <div className="createFolderBox_container">
                <div className="header">
                    <span>{this.props.floderType===0?'创建文件夹':'修改文件夹'}</span>
                    <i className="iconfont" onClick={this.cencel}>&#xe607;</i>
                </div>
                <div className="dialogContent">
                    {this.props.floderType===0&&
                        <ul>
                            <li>
                                <span>文件夹名称</span>
                                <input type="text" placeholder="请输入文件名称" value={this.state.folderName} onChange={this.handleChange} ref='input' />
                            </li>
                            <li>
                                <span>文件夹归属</span>
                                <input type="text" placeholder={this.props.parentObj.title} />
                            </li>
                        </ul>
                    }
                    {
                        this.props.floderType===1&&
                        <ul>
                            <li>
                                <span>文件夹名称</span>
                                <input type="text" placeholder="请输入文件名称" value={this.state.folderName} onChange={this.handleChange} ref='input' />
                            </li>
                        </ul>
                    }   
                </div>
                <div className="footer">
                    <TouchableOpacity clickCallBack={this.cencel} text="取消" className="cencel" />
                    <TouchableOpacity clickCallBack={this.confirm} text="确认" className="add" />
                </div>
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {

    return state

}
export default connect(mapStateToProps, actions)(CreateFolderBox)