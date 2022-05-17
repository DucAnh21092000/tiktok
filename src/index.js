import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './Components/GlobalStyles/index'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './redux/saga/saga';
import reducer from './redux/reducer/reducer';
import { Provider } from 'react-redux';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

const root = (document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
