import React from 'react'
import {connect} from 'react-redux'
import { store } from '../store/configurestore';
import { removeAll } from '../actions/action';

const RemoveAll=(props)=>{
    console.log(props);
    return(
        <div>
            <button disabled={props.name.length===0} onClick={ () => { props.dispatch(removeAll());  } }>remove all</button>
      
        </div>

    )

}
const func=(state)=>{

    return{
        name:state
    }

}

export  default connect(func)(RemoveAll)