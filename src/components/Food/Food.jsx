import React from 'react'

import styles from './Food.module.scss'

const Food = ({ bgImg, bgImg1, bgImg2 }) => {
	return (
		<div
			className={styles.wrapper}
			style={{
				backgroundImage: `url('${bgImg}')`,
			}}
		>
			<div className={styles.container}>
				<div
					className={styles.block}
					style={{
						backgroundImage: `url('${bgImg1}')`,
					}}
				></div>

				<div
					className={styles.block}
					style={{
						backgroundImage: `url('${bgImg2}')`,
					}}
				></div>
			</div>
		</div>
	)
}

export default Food
