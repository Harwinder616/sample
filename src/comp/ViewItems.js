import RemoveAll from './RemoveAll'
import React from 'react';
import Header from './header.js';
import {Link} from 'react-router-dom'
import Option from './option'


class ViewItems extends React.Component{

    
    /*state={search:'',
    filters:[]
}*/



render()
{return(<div>
    <Link to="/add"><button>Add Item</button></Link>
    <br></br>
    
{this.props.value.length>0?<h2>viewing {this.props.value.length} items</h2>:<h2>viewing 0 items</h2>}
    {this.props.value.map((option)=>{console.log(this.props.value.length)
    return <Option key={option} value={option} ></Option>

    
    
}
)}
    {this.props.value.length>0&&<RemoveAll />}


</div>)}}

export default ViewItems/*<input  type="text" placeholder="Search Item"
value={this.state.search}
onChange={(e) => {
this.setState({search:e.target.value});

this.setState(()=>{
    return{ 
        filters:this.props.value.filter((option)=>{
       const text=option.toLowerCase().includes(this.state.search.toLowerCase());
       return text;
       
   })}

});

}}></input>

{this.state.filters.length===0?
    this.props.value.length>0?<h2>viewing all items</h2>:<h2>no items</h2>:<h2>viewing {this.state.filters.length} items</h2>
}

{this.state.filters.length>0?
this.state.filters.map((option)=>{console.log(option)
return <Option key={option} value={option} />
}): this.props.value.map((option)=>{console.log(option)
return <Option key={option} value={option} />
})
}

{console.log(this.state.filters.length)}
{this.state.filters.length===0&&<RemoveAll/>}







<input  type="text" placeholder="Search Item"
value={this.state.search}
onChange={(e) => {
    {
        this.setState({search:e.target.value})
    }
  {this.display(this.state.search)}
  this.state.filters.map((option)=>{
      return <Option key={option} value={option} />
  })

}}></input>
  */