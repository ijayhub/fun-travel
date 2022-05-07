import React from 'react';
import Tour from './components/Tour';
import { Routes, Route } from 'react-router-dom';
import PlaceDetails from './components/PlaceDetails';
import Home from './components/Home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='Tour' element={<Tour />}></Route>
				<Route path='PlaceDetails' element={<PlaceDetails />}></Route>
			</Routes>
		</div>
	);
}

export default App;
