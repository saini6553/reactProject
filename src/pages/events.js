import React from 'react';
import { Outlet } from 'react-router-dom';

const Events = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Welcome to GeeksforGeeks Events</h1>
	<Outlet/>
	</div>
);
};

export default Events;
