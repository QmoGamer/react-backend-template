import React from 'react'
import { Route, IndexRoute, Router } from 'react-router'

/* container components */
import App from './containers/App'
import Packages from './containers/Packages/Packages'
import Package from './containers/Package/Package'
import Login from './containers/Login/Login'
import Index from './containers/Index/Index'

const routes = (
	<Router>
		<Route path="/login" component={Login} />
	  <Route path="/" component={App}>
	    <IndexRoute component={Index}/>
	    <Route path="/packages" component={Packages}/>
	    <Route path="/package/:id/:name" component={Package}/>
	  </Route>
  </Router>
)

export default routes
