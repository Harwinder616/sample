import React from 'react'
import ViewItems from './ViewItems'

import {connect} from 'react-redux';
const View=(props)=>{
    
    return(
        <div>
            <ViewItems value={props.value} />
        </div>
    )





}

const func=(state)=>{
    console.log(state);
    return{
        value:state
    }
}
export default connect(func)(View)