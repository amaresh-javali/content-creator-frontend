import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore'


const store = configureStore()
console.log('store', store)

console.log('state',store.getState())

store.subscribe(()=>{
    console.log('updated state', store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)





