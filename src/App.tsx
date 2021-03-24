import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, Register, Detail } from './pages';

const App: React.FC = () => {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />

					<Route path="/register" component={Register} />
					<Route path="/signIn" render={() => <h1>登录页面</h1>} />
					<Route path="/detail/:touristRouteId" component={Detail} />
					<Route render={() => <h1> 404 not found 页面去火星了</h1>} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
