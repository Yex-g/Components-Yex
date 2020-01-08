import React, { Component } from 'react'
import JsxTest from './Component/ComType'
import Clock from './Component/Clock'
import ContextTest from './Component/Context'
import HocTest from './Component/HocTest'
export default class App extends Component {
  render() {
    return (
      <div>
        <JsxTest />
        <Clock />
        <ContextTest></ContextTest>
        <HocTest />
      </div>
    )
  }
}
