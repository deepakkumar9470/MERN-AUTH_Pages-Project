import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
  } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import Home from './components/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoutes from './components/PrivateRoutes';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='/start' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='' element={<PrivateRoutes />} >
        <Route path='/' element={<Dashboard />} />
        </Route>
      </Route>
    )
  );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider> 
  
);



