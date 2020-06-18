import React, { Component } from 'react'

export class list extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.lists)
        return (
            <ul>{this.props.lists.map(item => {
                return (
                <li key={item}>{item}</li>
                )
            })}</ul>
        )
    }
}

export default list

