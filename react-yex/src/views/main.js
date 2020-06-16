import React, { Component } from 'react'

import YxButton from '@components/Button/index'
import YxIcon from '@components/Icon/index'
import YxLink from '@components/Link/index'
import KFormTest from './KFormTest'

export default class main extends Component {
    btnClick() {
        console.log(this)
    }
    render() {
        return (
            <div>
                <YxButton  click={this.btnClick} className="btn">
                    按钮图标
                    <YxIcon className="icon-auto"/>
                </YxButton>
                <YxButton click={this.btnClick} className="btn" icon>
                    按钮图标
                </YxButton>
                <YxLink />
                <KFormTest />
            </div>
        )
    }
}
