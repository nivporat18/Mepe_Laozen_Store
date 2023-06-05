import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productsReducer, { iphone11Fetch } from './components/store/iphones/ProductSlice'
import cartReducer, { getTotals } from "./components/store/CartSlice"
import { productsApi } from './components/store/iphones/ProductsApi';
import authReducer, { loadUser } from './components/store/AuthSlice';
import Iphone12Reducer, { iphone12Fetch } from './components/store/iphones/Iphone12Slice';
import Iphone13Reducer, { iphone13Fetch } from './components/store/iphones/Iphone13Slice';
import Iphone14Reducer, { iphone14Fetch } from './components/store/iphones/Iphone14Slice';
import AirPodsProReducer, { airPodsProFetch } from './components/store/airPods/AirPodsPro';
import AirPodsProMaxReducer, { airPodsProMaxFetch } from './components/store/airPods/AirPodsProMax';
import AirPods2Reducer, { airPods2Fetch } from './components/store/airPods/AirPods2';
import AirPods3Reducer, { airPods3Fetch } from './components/store/airPods/AirPods3';
import AppleWatch6Reducer, { appleWatch6Fetch } from './components/store/appleWatch/appleWatch6';
import AppleWatch7Reducer, { appleWatch7Fetch } from './components/store/appleWatch/appleWatch7';
import AppleWatch8Reducer, { appleWatch8Fetch } from './components/store/appleWatch/appleWatch8';
import AppleWatchUltraReducer, { appleWatchUltraFetch } from './components/store/appleWatch/appleWatchUltra';
import ImacReducer, { imacFetch } from './components/store/macbook/Imac';
import MacMiniReducer, { macMiniFetch } from './components/store/macbook/MacMini';
import MacbookAirReducer, { macbookAirFetch } from './components/store/macbook/MacbookAir';
import MacbookProReducer, { macbookProFetch } from './components/store/macbook/MacbookPro';
import IpadProReducer, { ipadProFetch } from './components/store/ipads/IpadPro';
import IpadAirReducer, { ipadAirFetch } from './components/store/ipads/IpadAir';
import IpadMiniReducer, { ipadMiniFetch } from './components/store/ipads/IpadMini';



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer:{
    products:productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cart:cartReducer,
    auth:authReducer,
    iphone12:Iphone12Reducer,
    iphone13:Iphone13Reducer,
    iphone14:Iphone14Reducer,
    airPodsPro:AirPodsProReducer,
    airPodsProMax:AirPodsProMaxReducer,
    airPods2:AirPods2Reducer,
    airPods3:AirPods3Reducer,
    appleWatch6:AppleWatch6Reducer,
    appleWatch7:AppleWatch7Reducer,
    appleWatch8:AppleWatch8Reducer,
    appleWatchUltra:AppleWatchUltraReducer,
    Imac:ImacReducer,
    MacbookAir:MacbookAirReducer,
    MacbookPro:MacbookProReducer,
    MacMini:MacMiniReducer,
    IpadPro:IpadProReducer,
    IpadAir:IpadAirReducer,
    IpadMini:IpadMiniReducer,
  },
    middleware:(getDefaultMiddleware)=>
     getDefaultMiddleware().concat(productsApi.middleware)
})


  store.dispatch(iphone11Fetch())
  store.dispatch(iphone12Fetch())
  store.dispatch(iphone13Fetch())
  store.dispatch(iphone14Fetch())

  store.dispatch(airPodsProFetch())
  store.dispatch(airPodsProMaxFetch())
  store.dispatch(airPods2Fetch())
  store.dispatch(airPods3Fetch())

  store.dispatch(appleWatch6Fetch())
  store.dispatch(appleWatch7Fetch())
  store.dispatch(appleWatch8Fetch())
  store.dispatch(appleWatchUltraFetch())

  store.dispatch(imacFetch())
  store.dispatch(macMiniFetch())
  store.dispatch(macbookAirFetch())
  store.dispatch(macbookProFetch())


  store.dispatch(ipadProFetch())
  store.dispatch(ipadAirFetch())
  store.dispatch(ipadMiniFetch())



  store.dispatch(getTotals())
  store.dispatch(loadUser(null))


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
