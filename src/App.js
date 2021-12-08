import React from "react";
import HomePage from "./Components/HomePage";
import { GlobalStyles, BodyContainer } from "./Styles/Styles";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKqHgxhII49ov4Q2Kti99cPLaQlC_cMzE",
  authDomain: "ideliver-dc269.firebaseapp.com",
  projectId: "ideliver-dc269",
  storageBucket: "ideliver-dc269.appspot.com",
  messagingSenderId: "469758164662",
  appId: "1:469758164662:web:4c1f1822b9ce3da4b43017",
};
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BodyContainer orientation="v">
      <GlobalStyles></GlobalStyles>
      <HomePage></HomePage>
    </BodyContainer>
  );
}

export default App;
