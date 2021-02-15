import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
