import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productDetailsReducer from '../src/detailsSlice.js'
import './Cart.jsx'
import Cart from './Cart.jsx'

//store was configured in main component to get access of actions from reducer in detailsSlice.
const store = configureStore({
  reducer:{
    productDetails: productDetailsReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Cart/>
    </Provider>
  </React.StrictMode>,
)
