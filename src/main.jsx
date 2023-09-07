import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles
        styles={{
          html: {
            margin: '0',
            padding: '0',
            boxSizing: 'border-box',
            backgroundColor: '#f4f0ef',
          },
          body: {
            margin: '0',
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
