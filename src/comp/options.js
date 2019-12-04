import React from 'react';
import Option from './option.js';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { addOption, removeAll } from '../actions/action';

import {store} from '../store/configurestore';
class Options extends React.Component{

    state={
        error:null
    }

    

    submit=(e)=>{
        e.preventDefault();
        const opt=e.target.option.value;

        if(opt==='')
        {

            this.setState(()=>{
                return{
                error:'please enter something'
               }
 
            })
        }
        
       else if(this.props.name.indexOf(opt)>-1)
       {
           this.setState(()=>{
               return{
               error:'already existed',
              }

           })
           e.target.option.value=''
       }
       else{
       
 
        this.props.onSubmit(e.target.option.value)
        // this.props.add(opt);
        e.target.option.value='';}
    }

render()
{return(

<div>
    
<form onSubmit={this.submit}>
        <input type="text" name="option"></input>
        <input type="submit" name="subscribe" value="submit"></input>
        <br>
        </br>
        {this.state.error&&<h2>{this.state.error}</h2>}
        {this.state.error=false}
      
        




        </form>
</div>)


}

}
/*{store.getState().map((option)=>{
    return <Option key={option} value={option} ></Option>
    
}
)}
<button disabled={this.props.length===0} onClick={ () => { store.dispatch(removeAll()); console.log(store); } }>remove all</button>*/

const func=(state)=>{
    return{
        name:state
    }

}

export default connect(func)(Options);