import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from "./server";
import { DataProvider } from './Context/data.context';
import { FilterDataProvider } from './Context/filterData.context';

// Call make Server
makeServer();


ReactDOM.render(
  <React.StrictMode>
    <FilterDataProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </FilterDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
