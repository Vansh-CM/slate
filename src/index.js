import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Provider store={store}>
  <BrowserRouter>
<Navbar />
    <App />
  </BrowserRouter>
  </Provider>
  </>
  // document.getElementById('root')
  /*
  utha - 8 
  phone chlate chlate - fresh hokar nhaya 9:30 ko nikal aaya
  tabse koi kaam nhi bss bethkar reels or videos dekh rha hun
  lunch me time pass kiya
  fir - ab youtube videos dekh rha hun
  chai ka intjar 
  karna kya chahiye
  


  */ 
);

reportWebVitals();
