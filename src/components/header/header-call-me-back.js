import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store')

@observer
class HeaderCallMeBack extends Component {

    phones = {
        'kyiv': {
            phone: '(098) 507 19 88, (093) 853 29 07',
            location: 'м.Київ, вул.Макаренка 1а'
        },
        'brovary': {
            phone: '(098) 961 02 62',
            location: 'м.Бровари, вул.Гагаріна 22'
        },
    }

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <div className="row select-wrapper">
                        {
                            Object.entries(this.phones).map( el => (
                                <div
                                  className="select-wrapper__item"
                                  key={el[0]}>
                                     <span>{el[1].phone}</span>
                                     <span>{el[1].location}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderCallMeBack;
