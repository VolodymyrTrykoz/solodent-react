import React, {Component} from 'react';
import Appointment from '../common/appointment';
import {inject, observer} from 'mobx-react';

@inject('store')

@observer
class HeaderCallMeBack extends Component {

    phones = {
        'kyiv': {
            phone: '(098) 705 19 88', 
        },
        'brovary': {
            phone: '(098) 777 17 32',  
        },
    }

    handleChange = e => {
        this.props.store.setUserLocation(e.target.value);
    }
    render(){
        const {location} = this.props.store;
        return(
            <div className="row">
                <div className="col-4">
                    <div className="row select-wrapper">
                        <select className="custom-select pointer" onChange={e => this.handleChange(e)}>
                            { Object.entries(this.phones).map( el => (
                                    <option 
                                        key={el[0]} 
                                        value={el[0]}
                                        selected={location === el[0]}
                                        >
                                            {el[1].phone}
                                    </option>
                                )) }
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderCallMeBack;
