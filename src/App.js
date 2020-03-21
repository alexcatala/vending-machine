import React from 'react';
import './App.css';
import CustomerPage from './pages/CustomerPage';
import logo from './logo.svg';

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-admin-icon" alt="admin" />
				<span>Admin</span>
			</div>
			<CustomerPage />
		</div>
	);
}

export default App;
