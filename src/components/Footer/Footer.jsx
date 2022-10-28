import React from 'react'

import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from 'react-icons/fa'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.container}`}>
				<div className={styles.col}>
					<h3>Explore Our Menu</h3>
					<p>Menu</p>
					<p>Nutritions</p>
					<p>Ingredients</p>
					<p>Drink Menu</p>
				</div>
				<div className={styles.col}>
					<h3>Get to know us</h3>
					<p>About us</p>
					<p>Franchising</p>
					<p>Foundation</p>
					<p>Mission Statement</p>
					<p>Goals</p>
				</div>
				<div className={styles.col}>
					<h3>Get in touch</h3>
					<p>Press</p>
					<p>Careers</p>
					<p>Contact us</p>
					<p>Get social</p>
				</div>
				<div className={styles.col}>
					<h3>Let's connect</h3>
					<div className={styles.social}>
						<FaFacebookSquare />
						<FaInstagramSquare />
						<FaTwitterSquare />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
