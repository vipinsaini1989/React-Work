import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import KeyCode from './keyCode'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KeyCode />, document.getElementById('root'));

registerServiceWorker();
