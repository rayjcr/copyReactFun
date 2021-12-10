import React, {useEffect, useState} from 'react'
import { useRootStore } from '../store/index'
export default function Test() {
    const {countStore} = useRootStore()

    useEffect(() => {
        console.log('子组件也更新了')
    }, [countStore.count]);

    return (
        <div>
            <h2>这里是TEST {countStore.count}</h2>
        </div>
    )
}
