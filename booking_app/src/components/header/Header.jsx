import React from 'react';
import styles from './header.module.css';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerContainer}>
				<ul className={styles.headerList}>
					<li className={`${styles.headerListItem} ${styles.buttonActive}`}>
						<span className={styles.itemIcon}>
							<LocalHotelIcon></LocalHotelIcon>
						</span>
						Stay
					</li>
					<li className={styles.headerListItem}>
						<span className={styles.itemIcon}>
							<AirplanemodeActiveIcon></AirplanemodeActiveIcon>
						</span>
						Flights
					</li>
					<li className={styles.headerListItem}>
						<span className={styles.itemIcon}>
							<DirectionsCarIcon></DirectionsCarIcon>
						</span>
						Car rentals
					</li>
					<li className={styles.headerListItem}>
						<span className={styles.itemIcon}>
							<AttractionsIcon></AttractionsIcon>
						</span>
						Attractions
					</li>
					<li className={styles.headerListItem}>
						<span className={styles.itemIcon}>
							<LocalTaxiIcon></LocalTaxiIcon>
						</span>
						Airport taxis
					</li>
				</ul>
				<h1 className={styles.headerTitle}>
					A lifetime of discounts! Sounds great, right?
				</h1>
				<p className={styles.headerDesc}>
					Get rewarded for your trips. Unlock instant savings of 10% with a
					coupon code <span className={styles.highlightText}>"Wanderer"</span>.
				</p>
				<button className={styles.headerButton}>Sign in / Register</button>
				<div className={styles.headerSearch}>
					<div className={styles.headerSearchItem}>
						<LocalHotelIcon />
						<input
							type='text'
							placeholder='Where are you going?'
							className={styles.headerSearchInput}
						/>
					</div>
					<div className={styles.headerSearchItem}>
						<CalendarMonthIcon />
						<span className={styles.headerSearchText}>date to date</span>
					</div>
					<div className={styles.headerSearchItem}>
						<PersonIcon />
						<span>2 adults 2 children 1 room </span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
