import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

const App: React.FC = () => {
	return (
		<div className={styles.App}>
			<Header></Header>
      <Footer></Footer>
		</div>
	);
};

export default App;
