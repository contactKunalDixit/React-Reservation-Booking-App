import React from 'react';
import styles from './navbar.module.css';
const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<div className={styles.logoName}>Travel_Booking.com</div>
				<div className={styles.nav_buttons}>
					<button className={styles.navButton_Register}>Register</button>
					<button className={styles.navButton_Login}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
