import React, { Component } from 'react';

import propTypes from 'prop-types'

import './index.less'

class MarkTemplate extends Component {
    
    static propTypes = {
        showMark : propTypes.bool.isRequired,
      }

    render(){
        var style = {
            width : document.documentElement.scrollWidth || document.body.scrollWidth + 'px',
            height:document.documentElement.clientHeight || document.body.clientHeight + 'px',
        }
        return (  
            this.props.showMark&&<div className="mark" style={style}></div>
        )
    }

}

export default MarkTemplate;