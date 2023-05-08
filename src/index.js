import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './Navbar';
import Cards  from './Cards';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <main className='bg-white bg-cover'>
        {/* navbar */}
        <section className='min-h-screen'>
          <NavBar/>
          {/* main page */}
          <App/>
          <Cards/>
        
        </section>
     </main>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
