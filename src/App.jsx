import React from 'react';
import {Routes,Route} from "react-router-dom";
import Loginpage from "./Pages/Loginpage";
import Registration from "./Pages/Registration";
import User from "./Pages/Users";
import Homepage from  "./Pages/Homepage"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path="/Loginpage" element={<Loginpage/>}/>
     <Route path='/Registration' element = {<Registration/>}/>
     <Route path='/Users' element = {<User/>}/>
      </Routes>
    </div>
  )
}

export default App

