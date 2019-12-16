import React, { Component } from 'react'
import JsxTest from './Component/ComType'
import Clock from './Component/Clock'

export default class App extends Component {
  render() {
    return (
      <div>
        <JsxTest />
        <Clock />
      </div>
    )
  }
}
