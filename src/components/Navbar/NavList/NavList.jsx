import React from 'react'

import styles from './NavList.module.scss'

const NavList = ({ active }) => {
	return (
		<ul
			className={`
				${styles.list}
				${active ? styles.active : ''}
			`}
		>
			<li className={styles.list__item}>Home</li>
			<li className={styles.list__item}>Order</li>
			<li className={styles.list__item}>Menu</li>
			<li className={styles.list__item}>Delivery</li>
			<li className={styles.list__item}>Contacts</li>
		</ul>
	)
}

export default NavList
