import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
// import 'bootstrap';
// import '../../style/css/style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
