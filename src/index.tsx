import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Styles
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@forevolve/bootstrap-dark/dist/css/bootstrap-dark.min.css'
import './index.css'

import { rootReducer } from './store'
import App from './App'

const store = createStore(rootReducer, {})

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)