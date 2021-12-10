import CounterStore from './count';
import PersonStore from './obj';
import { createContext, useContext } from 'react';

class RootStore {
    constructor() {
        this.countStore = new CounterStore();
        this.personStore = new PersonStore();
    }
}

const RootStoreContext = createContext();

const RootStoreProvider = ({store,children})=>{
    // console.log(store,'rootStoreContext--store--line--13')
    return (
        <RootStoreContext.Provider value={store}>
            {children}
        </RootStoreContext.Provider>
    )
}

const useRootStore = () => {
    // console.log(RootStoreContext,'6666666699999999')
    return useContext(RootStoreContext)
}

export {
    RootStore,
    RootStoreProvider,
    useRootStore
}