import {observable, computed, action} from "mobx";

class Store {
    @observable isFormSent = false;

    @observable location = 'kyiv';

    @computed get getUserLocation(){
        return this.location
    }

    @action setUserLocation(location){
        return this.location = location;
    }

    @computed get getFormStatus(){
        return this.isFormSent;
    }

    @action setFormStatusToSuccess(){
        this.isFormSent = true;
    }
}

const store = new Store();

export default store;