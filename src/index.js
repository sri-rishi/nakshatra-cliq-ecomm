import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import { makeServer } from "./server";
import { DataProvider } from './Context/data.context';
import { FilterDataProvider } from './Context/filterData.context';
import { AuthProvider } from './Context/auth.context';

// Call make Server
makeServer();


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <DataProvider>
        <FilterDataProvider>
          <App />
        </FilterDataProvider>
      </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
