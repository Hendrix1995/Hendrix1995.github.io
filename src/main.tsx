import React from 'react';
import ReactDOM from 'react-dom/client';

import { setup } from 'twind';
import twConfig from '../twind.config.json';

import App from './App';

import './reset.css';

setup(twConfig as any);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
