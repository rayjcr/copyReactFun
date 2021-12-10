import { reaction } from 'mobx';
import { observer } from 'mobx-react'
import React, {useEffect, useState} from 'react'
import { useRootStore } from '../store/index'
// 添加了监听数据变化后更新，再测试下是否不相干的也会变化
const Test = observer(() => {
    const {countStore} = useRootStore()

    // reaction(
    //     () => countStore.count,
    //     (current, pre) => {
    //         console.log(current, pre, 'current && pre')
    //     }
    // )

    useEffect(() => {
        console.log('子组件也更新了')
    }, [countStore.count]);

    return (
        <div>
            <h2>这里是TEST {countStore.count}</h2>
        </div>
    )
})

export default Test
