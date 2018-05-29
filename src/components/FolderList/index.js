import React, { Component } from 'react';

import propTypes from 'prop-types'

import './index.less'

class FolderList extends Component {
  static propTypes = {
    list: propTypes.object
  }

  state = {
    visible: true
  }

  render() {

    return (
      <ul>
        <li>
          <div className="title">
            <i className="iconfont">&#xe619;</i>
            <span>我的文件夹</span>
          </div>
          <ul>
            <li>
              <div className="title">
                <i className="iconfont">&#xe619;</i>
                <span>我是子文件夹</span>
              </div>
              <ul>
                <li>
                  <div className="title">
                    <i className="iconfont">&#xe619;</i>
                    <span>我的文件夹</span>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <i className="iconfont">&#xe619;</i>
                    <span>我的文件夹</span>
                  </div>
                  <ul>
                    <li>
                      <div className="title">
                        <i className="iconfont">&#xe619;</i>
                        <span>我的文件夹</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="title">
                <i className="iconfont">&#xe619;</i>
                <span>我是子文件夹</span>
              </div>
              <div className="title">
                <i className="iconfont">&#xe619;</i>
                <span>我是子文件夹</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    );
    
  }
}

export default FolderList;