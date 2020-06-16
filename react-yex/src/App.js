import React, { Component } from 'react'

import List from './views/list'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[
                11,22,33
            ]
        }
    }
  render() {
    return (
      <div>
          <List lists = {this.state.list}></List>
      </div>
    )
  }
}
