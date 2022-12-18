import React from 'react'
import { HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Films from '../view/films/Films'
import Film from '../view/film/Film'
import Active from '../view/active/Active'
import Center from '../view/center/Center'
import Cinemas from '../view/cinemas/Cinemas'
import Error from '../view/error/Error'
export default function indexRouter(props) {
  return (
    <HashRouter>
      <Switch>

       <Route path="/films"  render={()=>
        <Films>
        
        </Films>
        
       }/>
       <Route path="/cinemas" component={Cinemas}/>
       <Route path="/active" component={Active}/>
       <Route path="/center" component={Center}/>
       <Route path="/film/:myId" component={Film}/>
       <Redirect from="/" to="/films/nowPlaying" exact/>
       <Route component={Error}/>
       </Switch>
       {props.tabber}
    </HashRouter>
  )

}
