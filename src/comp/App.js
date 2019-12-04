import  React from 'react';
import Header from './header.js';
import Options from './options.js';
//import { store } from './store/configurestore.js';
import {connect} from 'react-redux'
import { store } from '../store/configurestore';








export default class App extends React.Component{


  /*removeall=()=>{

    this.setState((prev)=>{
      return{
        options:[]
      }
    })

  }
  one=(opt)=>{

    this.setState((prev)=>{
      return{
        options:prev.options.filter((option)=>{
          return opt!==option
        })
      }
    })



  }
 /* add=(opt)=>{
    this.setState((prev)=>
    {

      return{
        options:prev.options.concat([opt])
      }

    })


 
  }
*/
  

render()
{
  // console.log(this.state.options);
   console.log(store.getState().length);
  return(
    <div>
      
       <Options/>
       
       
       

    </div>
  )
}
}