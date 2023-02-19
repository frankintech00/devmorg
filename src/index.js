import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div className='w-full h-full py-10 bg-gray-600'>
			<App />
		</div>
	</React.StrictMode>
);
