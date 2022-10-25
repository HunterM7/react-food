import React from 'react'

import styles from './Navbar.module.scss'

import NavList from './NavList/NavList'

import { GiHamburger } from 'react-icons/gi'
import { GoThreeBars } from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [isPopupOpen, setIsPopupOpen] =
		React.useState(false)

	const handlePopup = () => {
		setIsPopupOpen(!isPopupOpen)
	}

	return (
		<div className={styles.wrapper}>
			<div className={`container ${styles.container}`}>
				<div className={styles.logo}>
					<GiHamburger />
				</div>
				<nav className={styles.nav}>
					<NavList active={isPopupOpen} />
				</nav>
				<div
					className={styles.hamburger}
					onClick={handlePopup}
				>
					{isPopupOpen ? (
						<FaTimes style={{ color: '#fff' }} />
					) : (
						<GoThreeBars style={{ color: '#000' }} />
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
