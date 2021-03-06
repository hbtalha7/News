import React from 'react'
import './index.css';
import {BrowserRouter ,Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import Feedbacksceen from './Screens/Feedbacksceen';
import Newscontent from './Screens/Newscontent';
function App() {
  return (
    <BrowserRouter>      
      <Route path="/feedback" component={Feedbacksceen}></Route>
      <Route path="/newcontent/:id" component={Newscontent}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </BrowserRouter>
  );
}

export default App;
