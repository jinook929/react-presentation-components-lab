import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";
import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(e) => {e.target.innerText = e.target.innerText.includes("happy") ? "I am just sad" : "I am just happy"}} />
  </div>,
  document.getElementById('root')
);