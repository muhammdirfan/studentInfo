import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Layouts/Home';
import store from './store';
import { Provider } from 'react-redux';


// const array = [
//   { id: 1, name: 'serdar' },
//   { id: 5, name: 'alex' },
//   { id: 300, name: 'brittany' }
// ];
// const idToRemove = 5;

// const filterArray = array.filter((item) => item.id !== idToRemove); 
// console.log(filterArray); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
