import React from 'react'

import styles from './Navbar.module.scss'

import NavList from './NavList/NavList'

import { GiHamburger } from 'react-icons/gi'
import { GoThreeBars } from 'react-icons/go'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [isPopupOpen, setIsPopupOpen] =
		React.useState(false)
	const [color, setColor] = React.useState(false)

	const handlePopup = () => {
		setIsPopupOpen(!isPopupOpen)
	}

	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true)
		} else {
			setColor(false)
		}
	}

	window.addEventListener('scroll', changeColor)

	return (
		<div
			className={`${styles.wrapper} ${
				color ? styles['wrapper--bg'] : ''
			}`}
		>
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
						<GoThreeBars />
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
