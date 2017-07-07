import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter, browserHistory } from 'react-router-dom';

import RequireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  	<Provider store={createStoreWithMiddleware(reducers)}>
	   	<BrowserRouter>
			
			<switch>
				<Route path="/" component={App} ></Route>
				<Route path="/resources" component={RequireAuth(Resources)}></Route>
			</switch>
			
		</BrowserRouter>
	</Provider>
  	, document.querySelector('.container'));
