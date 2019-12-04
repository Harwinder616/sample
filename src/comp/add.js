import React from 'react'
import Options from './options'
import {connect} from 'react-redux'
import { addOption } from '../actions/action'
const add=(props)=>{

    return(

        <div>
         <h2>Add item</h2>
         <Options onSubmit={(expense)=>{
             props.dispatch(addOption(expense))
             props.history.push('/')

             }}/> 

        </div>
    )




}

export default connect()(add)