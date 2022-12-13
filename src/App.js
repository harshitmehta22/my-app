import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {useFormik} from 'formik';
import { useState } from 'react';
import Appheader from './Components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Appservices from './Components/services';
import Appbanner from './Components/banner';
import Appservicepart from './Components/servicespart';
import Appexperience from './Components/experience';
import Appfooter from './Components/footer';
import Home from './Components/home';
import Layout from './Components/navbar';
import {Provider} from 'react-redux';
import Corporate from './Pages/corporate-profile';
import Service from './Pages/service';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Construction from './Pages/Construction-mechinery';
import Login from './Components/login';
import Protected from './protected';
import Profile from './profile';

function App() {
  const[isLoggedIn,setisLoggedIn] = useState(null);
  const logIn =()=>{
    setisLoggedIn(true);
  };
  const logOut =()=>{
    setisLoggedIn(false);
  };
  return (
    <div className="App">
      <header className="App-header"> 
        <Appheader/>
        {/* <Provider store={store}> */}
        <BrowserRouter>
          {/* {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
          ) : (
          <button onClick={logIn}>Login</button>
          )} */}
          <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          {/* <Route path='/'
                   element={
                     <Protected isLoggedIn={isLoggedIn}>
                          <Profile />
                      </Protected>
          }
          /> */}
          <Route path='corporate-profile' element={<Corporate/>}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='services' element={<Service/>}></Route>
          <Route path='construction-machinery' element={<Construction/>}></Route>
          <Route path='Contact' element={<Contact/>}></Route>
          {/* <Route path="login" element={<Login/>}></Route> */}
          </Route>
          </Routes>
          </BrowserRouter>
          {/* </Provider> */}
      </header>
      <main>
      </main>
      <footer>
        <Appfooter/>
      </footer>
      
    </div>
  );
}

export default App;
