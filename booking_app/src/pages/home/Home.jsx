import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import styles from './home.module.css';
const Home = () => {
	return (
		<React.Fragment>
			<div className={styles.Home}>
				<div className={styles.homeContainer}>
					<Navbar></Navbar>
					<Header></Header>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
