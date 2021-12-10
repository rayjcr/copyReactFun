import { makeAutoObservable, runInAction } from 'mobx'

/**
 * 以下是6.0的版本的降级写法
 */
// 使用该配置，可以将 Proxy 降级为 Object.defineProperty
// configure({ useProxies:'never' });

// const store = makeObservable(
//     {
//         count:0,
//         get double(){
//             return this.count * 2;
//         },
//         increment(){
//             this.count += 1;
//         },
//         decrement(){
//             this.count -= 1;
//         }
//     },
//     {
//         count: observable,
//         double: computed,
//         increment: action,
//         decrement: action,
//     }
// )

/**
 * 以下是6.0版本利用 makeAutoObservable的方法
 */
class CounterStore {
    count = 10
    constructor(){
        makeAutoObservable(this, {}, {autoBind: true})
    }
    increment(){
        this.count += 1;
    }
    decrement(){
        this.count -= 1;
    }

    async asyncIncrement(){
        const count = await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(10)
            },2000)
        })
        runInAction(()=>{
            this.count = count
        })
    }
}

export default CounterStore;
// export default makeAutoObservable({
//     count:0,
//     get double(){
//         return this.count * 2;
//     },
//     increment(){
//         this.count += 1;
//     },
//     decrement(){
//         this.count -= 1;
//     },
//     async asyncIncrement(){
//         const count = await new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve(10)
//             },2000)
//         })
//         runInAction(()=>{
//             this.count = count
//         })
//     }
// })