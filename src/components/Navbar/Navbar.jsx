import React from 'react'

import { GiHamburger } from 'react-icons/gi'
import { GoThreeBars } from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'

import styles from './Navbar.module.scss'
import NavList from './NavList/NavList'

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
					{isPopupOpen ? <FaTimes /> : <GoThreeBars />}
				</div>
			</div>
		</div>
	)
}

export default Navbar
