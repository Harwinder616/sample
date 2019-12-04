import React from 'react'
import NotFound from '../comp/error'
import Header from '../comp/header'
import App from '../comp/App'
import View from '../comp/view'
import Add from '../comp/add'
import{NavLink,Switch,Route,BrowserRouter} from 'react-router-dom'


const Head=()=>{
    return(
       <header>
           <h1>Expensify-App</h1>
           <h2>simple Application </h2>
 

    
    </header>)
}
const Routes=()=>{
    return(
        
        <BrowserRouter>
        <div>
            
            <Head />
            <Switch>
        <Route path="/" component={View} exact={true} />
        <Route path="/add" component={Add}></Route>
       
        <Route component={NotFound} />

        
        </Switch>
        </div>
        </BrowserRouter>
    )
}
export default Routes /*<Route path="/add" component={add}  />
<Route path="/help" component={helppage} exact={true} />*/