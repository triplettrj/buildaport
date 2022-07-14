import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<ContextProvider>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</ContextProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
