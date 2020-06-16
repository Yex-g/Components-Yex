import React, { Component } from 'react'
export default class Button extends Component {
    handleClick = () => {
        this.props.click.call(this)
    }
    render() {
        let _class = this.props.className
        return (
            <button className={
                "yx-btn " +
                _class
            } onClick={() => this.handleClick()} >{this.props.children}</button>
        )
    }
}
