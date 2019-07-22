import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'
import Info from './Components/Info/Info'
import Portfolio from './Components/Portfolio/Portfolio';
import Shop from './Components/Shop/Shop';

export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/blog' component={Blog}/>
    <Route exact path='/info' component={Info}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/portfolio' component={Portfolio}/>
    <Route exact path='/shop' component={Shop}/>
  </Switch>
)