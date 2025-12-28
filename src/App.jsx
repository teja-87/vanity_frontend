import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Launchpad from './pages/Launchpad/Launchpad';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Landing/>}/>
        <Route path='/launchpad' element={  <Launchpad/>}/>
             
            
      </Routes>
     
    </BrowserRouter>
  )
}

export default App