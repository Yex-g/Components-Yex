import React, { Component, Children } from 'react'
export default class Button extends Component {
    constructor(props) {
        super(props)
        this.handleCllick = this.handleCllick.bind(this)
    }
    handleCllick(){
        this.props.click.call(this)
    }
    render() {
        return (
            <button className="yx-button" onClick = { () => this.handleCllick()} >{this.props.children}</button>
        )
    }
}
