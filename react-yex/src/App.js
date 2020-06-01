import React, { Component } from 'react';

import YxButton from './components/Button/index'

export default class App extends Component {

  btnClick(){
    console.log(this)
  }
  render() {
    return (
      <div className="App">
      <YxButton click={this.btnClick}>按钮</YxButton>
    </div>
    )
  }
}
