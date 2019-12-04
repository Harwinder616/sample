import React from 'react'

import { removeOption } from '../actions/action';
import { store } from '../store/configurestore';


export default class Option extends React.Component{
    
     remove=()=>{

     store.dispatch(removeOption(this.props.value));
    
     //console.log(store);
    }
    render(){
        return(
            <div>
            
            <p>{this.props.value}
            {console.log('ff')}
           
            <button onClick={this.remove}>remove item</button></p>

            </div>
        )

    }

}