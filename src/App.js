import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Form from './Components/userForm';
import Admin from './Components/AdminLogin';

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Router>
  );
}

export default App;
