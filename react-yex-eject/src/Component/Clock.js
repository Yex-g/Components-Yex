import React, { Component, useState, useEffect } from 'react'
function ClockFun(){
    const [date,setDate] = useState(1);
    return (
        <div>{date}</div>
    )
}
export default class Clock extends Component {
    constructor(props){
        super()

        this.state = {
            date:new Date()
        }
    }
    componentDidMount(){
        this.timerId = setInterval(() =>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}