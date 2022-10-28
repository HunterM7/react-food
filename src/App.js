import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Food from './components/Food/Food'
import Footer from './components/Footer/Footer'

// BG Images
import Craft1 from './assets/images/craft1.jpg'
import Craft2 from './assets/images/craft2.jpg'
import Chicken from './assets/images/chicken.jpg'
import Burger from './assets/images/burger.jpg'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Food bgImg1={Craft1} bgImg2={Craft2} />
			<Food bgImg={Chicken} />
			<Food bgImg={Burger} />
			<Footer />
		</>
	)
}

export default App
