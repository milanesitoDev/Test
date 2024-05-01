import React from 'react';
import ReactDOM from 'react-dom/client';
import ViewMain from './pages/ViewMain';
import '../src/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewMain/>
  </React.StrictMode>
);

