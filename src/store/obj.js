import { makeAutoObservable } from 'mobx'

class PersonStore {
    person = {a:6}
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }
    get getPersons(){
        return this.person
    }
    setPerson(val) {
        this.person = {...this.person,...val};
    }
}

export default PersonStore

// export default makeAutoObservable({
//     persons:{},
//     get getPersons(){
//         return this.persons;
//     },
//     setPersons(){
//         this.persons = {a:1,b:2,c:3};
//     },
// })