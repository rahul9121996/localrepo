import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
import { Provider } from 'react-redux';
import { store } from './ReduxToolkitAddToCart/addtocartStore.jsx'
// import { store } from './ReduxToolkit/Store.jsx'
// import { store } from './ReduxAddToCart/ReduxFile/Store.jsx'
// import { store } from './ReduxToolkitToDo/TodoStore.jsx'


createRoot(document.getElementById('root')).render(

  // <BrowserRouter>

  <Provider store={store} >
    
      <App />

  </Provider>
    
  
    // </BrowserRouter>
  
)
