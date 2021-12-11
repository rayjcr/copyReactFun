import React from 'react'
import { useRootStore } from '../store/index'
export default function CompTest() {
    const { countStore } = useRootStore()
    // console.log(countStore, 'compTest--line 5')
    const addNum = () => {
        countStore.increment()
    }
    return (
        <div>
            <button onClick={addNum}>我这里要加一</button>
        </div>
    )
}
