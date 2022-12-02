import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

window.addEventListener('load', (loadEvent)=>{
  const targetElement = document.getElementById('portfolio');
  if(targetElement){
    const root = createRoot(targetElement);
    root.render(<App />);
  }
})