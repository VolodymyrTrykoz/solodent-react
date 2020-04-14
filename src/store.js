import {observable, computed, action} from "mobx";

class Store {
    @observable isFormSent = false;

    @computed get getFormStatus(){
        return this.isFormSent
    }

    @action setFormStatusToSuccess(){
        this.isFormSent = true;
    }
}

const store = new Store();

export default store;