import {observable, computed, action} from "mobx";

class Store {
    @observable isModalOpened = false;

    @computed get modalState(){
        return this.isModalOpened
    }

    @action toggleModalState(){
        this.isModalOpened = !this.isModalOpened;
    }
}

const store = new Store();

export default store;