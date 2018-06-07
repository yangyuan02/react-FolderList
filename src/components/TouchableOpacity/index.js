import React, { Component } from 'react';

import propTypes from 'prop-types'

import './TouchableOpacity.less'

export default class TouchableOpacity extends Component {

    static propTypes = {
        clickCallBack: propTypes.func,
        text: propTypes.string,
        className: propTypes.string
    }

    handleClick = () => {
        this.props.clickCallBack()
    }

    render() {
        return (
            <div className={this.props.className} onClick={this.handleClick}>{this.props.text || '确认'}</div>
        );
    }

}