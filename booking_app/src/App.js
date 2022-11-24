import styles from './App.module.css';
import React from 'react';
import Home from './pages/home/Home';
import HotelList from './pages/list/HotelList';
import Hotel from './pages/singleHotelPage/Hotel';
import {
	BrowserRouter as Router,
	Switch,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className={styles.appContainer}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='hotels' element={<HotelList />} />
					<Route path='/hotels/:id' element={<Hotel />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
