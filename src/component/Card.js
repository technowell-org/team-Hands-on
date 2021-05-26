import React, { Component } from 'react'
import Cad from  './Cad'
import Magic from './Magic'
import Pack from './Pack'
import Fancy from './Fancy'
 class Card extends Component {
    render() {
        return (
            <div className="container justify-content-center">
                <div className="row">
                   <div className="col-md-3">
                    <Cad/>
                       </div> 
                   <div className="col-md-3">
                   <Magic/>
                       </div> 
                  
                   <div className="col-md-3">
                   <Pack/>
                   </div>
                   <div className="col-md-3">
                   <Fancy/>
                   </div>
                </div>
            </div>
        )
    }
}

export default Card
