import { makeAutoObservable } from 'mobx'

class Person {
    person = {}
    constructor() {
        makeAutoObservable(this)
    }
    setPerson() {
        this.person = {a:1,b:2,c:3};
    }
}

export default Person

// export default makeAutoObservable({
//     persons:{},
//     get getPersons(){
//         return this.persons;
//     },
//     setPersons(){
//         this.persons = {a:1,b:2,c:3};
//     },
// })