import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
 } from '@livepeer/react';

const client = createReactClient({
  provider: studioProvider({ apiKey: '536419df-faa4-4492-9f40-1518f0140ac0' }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <LivepeerConfig client={client}>
    <App />
  </LivepeerConfig>,
)
