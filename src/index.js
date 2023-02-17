import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div className='w-full h-screen px-2 py-20 bg-gray-200 min-w-fit'>
			<App />
		</div>
	</React.StrictMode>
);
