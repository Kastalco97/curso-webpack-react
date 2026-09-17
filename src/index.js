import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@components/App.jsx';
import '@styles/sstyle/global.scss';

const root = ReactDOM.createRoot(document.getElementById('app')); // Creating a resource to define where will be imported our app

root.render(<App />);