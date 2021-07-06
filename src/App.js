import React, {Component} from 'react'
import './index.css';
import {BrowserRouter ,Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import Feedbacksceen from './Screens/Feedbacksceen';
import Newscontent from './Screens/Newscontent';
function App() {
  return (
    <BrowserRouter>      
      <Route path="/feedback" Component={Feedbacksceen}></Route>
      <Route path="/newcontent/:id" Component={Newscontent}></Route>
      <Route path="/" Component={HomeScreen} exact></Route>
    </BrowserRouter>
  );
}

export default App;
