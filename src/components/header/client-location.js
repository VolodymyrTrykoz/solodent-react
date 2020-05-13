import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store')

@observer
class ClientLocation extends Component {

    address = {
        'kyiv': {
            city: 'м.Київ',
            str: 'вул.Макаренка 1а'    
        },
        'brovary': {
            city: 'м.Бровари',
            str: 'вул.Гагаріна 22'    
        },
    }
    
    handleChange = e => {
        this.props.store.setUserLocation(e.target.value);
    }

    render (){
        const {location} = this.props.store;
        
        return(
            <div className="client-location d-flex justify-content-end align-items-center">
                <span className="text-sm">Ваше місто</span>
                <select className="custom-select pointer" 
                    onChange={e => this.handleChange(e)}>
                    { Object.entries(this.address).map( el => (
                        <option 
                            key={el[0]} 
                            value={el[0]}
                            selected={location === el[0]}
                            >
                               {el[1].city}
                        </option>
                    )) }
                </select>
                <span className="location-street">{this.address[location].str}</span>
            </div>
        )
    }
}

export default ClientLocation;