import React, { useState } from 'react'
export default function Link() {


    // useState参数是状态初始值
    // 返回一个数组，第一个元素是状态变量，第二个元素是状态变更函数。
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
    /* return (
        <div>
            11
        </div>
    ) */
}

