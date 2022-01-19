import React from 'react'
import CourierHomePage from './Components/CourierHomePage'
import ClientRegistration from './Components/ClientRegistration'
import CourierRegistration from './Components/CourierRegistration'
import Login from './Components/Login'
import ViewList from './Helpers/ViewList'
import CourierPackages from './Components/CourierPackages'

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import { GlobalStyles, BodyContainer } from './Styles/Styles'
import { initializeApp } from 'firebase/app'
import Map from './Components/Map'

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
    <BodyContainer orientation='v'>
      <GlobalStyles></GlobalStyles>

      <Router>
        <Routes>
          <Route path='/courier_homepage' element={<CourierHomePage />}></Route>
          <Route
            path='/client_registration'
            element={<ClientRegistration />}></Route>
          <Route
            path='/courier_registration'
            element={<CourierRegistration />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/courier_packages' element={<CourierPackages />}></Route>
          <Route path='/map' element={<Map />}></Route>
          <Route path='/' element={<ViewList />}></Route>
        </Routes>
      </Router>
    </BodyContainer>
  )
}

export default App
