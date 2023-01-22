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
  provider: studioProvider({ apiKey: import.meta.env.VITE_LIVEPEER_KEY }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <LivepeerConfig client={client}>
    <App />
  </LivepeerConfig>,
)
