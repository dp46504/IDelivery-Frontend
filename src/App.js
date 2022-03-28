import React from 'react'
import CourierHomePage from './Components/CourierHomePage'
import ClientHomePage from './Components/ClientHomePage'
import ClientRegistration from './Components/ClientRegistration'
import CourierRegistration from './Components/CourierRegistration'
import ClientAddPackage from './Components/ClientAddPackage'
import RateCourier from './Components/RateCourier'
import Login from './Components/Login'
import CourierPackages from './Components/CourierPackages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles, BodyContainer } from './Styles/Styles'
import { initializeApp } from 'firebase/app'
import Map from './Components/Map'
import ProtectedRoutes from './Helpers/ProtectedRoutes'
import Settings from './Components/Settings'

const firebaseConfig = {
  apiKey: 'AIzaSyCKqHgxhII49ov4Q2Kti99cPLaQlC_cMzE',
  authDomain: 'ideliver-dc269.firebaseapp.com',
  projectId: 'ideliver-dc269',
  storageBucket: 'ideliver-dc269.appspot.com',
  messagingSenderId: '469758164662',
  appId: '1:469758164662:web:4c1f1822b9ce3da4b43017',
}
const app = initializeApp(firebaseConfig)

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>

      <Router>
        <Routes>
          {/* Private Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route
              path='/courier_homepage'
              element={<CourierHomePage />}></Route>
            <Route path='/client_homepage' element={<ClientHomePage />}></Route>
            <Route path='/settings' element={<Settings />}></Route>

            <Route
              path='/courier_packages'
              element={<CourierPackages />}></Route>
            <Route path='/map' element={<Map />}></Route>

            <Route
              path='/adding_package'
              element={<ClientAddPackage />}></Route>

            <Route path='/rate_courier' element={<RateCourier />}></Route>
          </Route>

          <Route exact path='/' element={<Login />}></Route>
          <Route
            path='/client_registration'
            element={<ClientRegistration />}></Route>
          <Route
            path='/courier_registration'
            element={<CourierRegistration />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
