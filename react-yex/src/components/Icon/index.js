import React, { Component } from 'react'

export default class index extends Component {
    handleClick = () => {
        debugger
        this.props.click.call(this)
    }
    render() {
        let _class = "yx-iconfont iconfont " + (!!this.props.className ? this.props.className : '')
        let el = <i className={_class} onClick={() => this.handleClick()} ></i >
        this.props.type === "svg" && (el = <svg className="yx-iconfont">
            <use xlinkHref={'#' + this.props.className}></use></svg>)
        return el
    }
}
