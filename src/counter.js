import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {

  state={
    count:0,
    istoggle:false

  }

  add=()=>{console.log('added');
    this.setState((prev)=>
    {
      return{
      count:prev.count+1}

    })

  }
  
  minus=()=>{console.log('minus');
    this.setState((prev)=>
    {
      return{
      count:prev.count-1}

    })

  }
  toggle=()=>{console.log(this.state.istoggle);
    
    
    
    this.setState((prev)=>
    {
      return{
      istoggle:(!prev.istoggle)}

    })

  }
  componentDidMount=()=>{

    let count2=JSON.parse(localStorage.getItem('count'));
    this.setState(()=>{
      return{ 
        count:count2
      }
    })

}

  componentDidUpdate=(prevprops)=>{
    console.log(prevprops);
   if(prevprops.count!==this.state.count)
   localStorage.setItem('count',this.state.count);

  }
render()
{
  return(
<div>
<h1>counter:{this.state.count}</h1>
<button onClick={this.add}>add</button>
<button onClick={this.minus}>-</button>
<button onClick={this.toggle}>{this.state.istoggle?'hide details':'view details'}</button>
{this.state.istoggle&&<p>here are ur details</p>}


</div>


  )
  
}}
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/export default Counter;
