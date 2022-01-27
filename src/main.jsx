import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import store from "./redux/store";
// import './index.css'
// import 'ag-grid-community/dist/styles/ag-grid.css'
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
