import React from 'react'

import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<section className={styles.wrapper}>
			<div className={`container ${styles.container}`}>
				<div className={styles.content}>
					<p className={styles.text}>Always</p>
					<h1 className={styles.title}>
						Served Fresh
						<br />
						Daily
					</h1>
					<button className='btn'>Delivery</button>
					<button className='btn'>Take-out</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
