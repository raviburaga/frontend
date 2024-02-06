import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Form from './Components/userForm';
import Admin from './Components/AdminLogin';
import Fetch from './Components/Admin';

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/fetchdb' element={<Fetch />} />
          </Routes>
        </Router>
  );
}

export default App;
