//Including modules and components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './github.css';
import 'react-select/dist/react-select.css';

//Rendering the App component inside the Section having id index in index.html
ReactDOM.render(<App/>, document.getElementById('index'));