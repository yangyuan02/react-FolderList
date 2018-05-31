import React, { Component } from 'react';

import {connect} from 'react-redux'

import propTypes from 'prop-types'

import {add} from '../../store/FolderList/action'

import TouchableOpacity from '../TouchableOpacity/index';

import './index.less'


class CreateFolderBox extends Component {
    
    static propTypes = {
        proData: propTypes.object.isRequired,
        showMark: propTypes.bool.isRequired,
        closeMarkCallBack: propTypes.func,
        add:propTypes.func.isRequired
    }

    state = {
        folderName:''
    }

    handleChange = (event) =>{
        if(event.target.value){
            this.refs.input.style.borderColor = '#ccc'
        }
        this.setState({
            folderName: event.target.value
        })
    }

    confirm = () =>{
       if(!this.state.folderName.toString()){
            this.refs.input.style.borderColor = '#f44336'
            return false
       }
       let obj = {
           title:this.state.folderName,
           children:[],
           status:false
       }
       
       this.props.add(obj)
    }

    cencel = () =>{
        this.setState({
            folderName: ''
        })
        this.props.closeMarkCallBack()
    }

    render(){
        
        return (  
            this.props.showMark&&<div className="createFolderBox_container">
                <div className="header">
                    <span>创建文件夹</span>
                    <i className="iconfont" onClick={this.cencel}>&#xe607;</i>
                </div>
                <div className="dialogContent">
                    <ul>
                        <li>
                            <span>文件夹名称</span>
                            <input type="text" placeholder="请输入文件名称" value={this.state.folderName} onChange={this.handleChange} ref='input'/>
                        </li>
                        <li>
                            <span>文件夹归属</span>
                            <input type="text" placeholder="文件夹归属"/>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <TouchableOpacity clickCallBack={this.cencel} text="取消" className="cencel" />
                    <TouchableOpacity clickCallBack={this.confirm} text="确认" className="add" />
                </div>
            </div>
        )
    }

}

export default connect(state =>({
    proData:state.proData
  }),{
    add
  })(CreateFolderBox);