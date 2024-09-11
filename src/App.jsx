import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserContext } from './Context';

import { useState } from 'react';

import Login from './pages/Login';
import Database from './pages/Database';
import Deals from './pages/Deals';
import Summary from './pages/Summary';
import Archived from './pages/Archived';
import Clients from './pages/Clients';
import Users from './pages/Users';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Super Admin',
      email: 'sampleuser@email.com',
      password: 'user123',
    },
  ]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <UserContext.Provider value={{ users, setUsers, user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/database" element={<Database />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/archived" element={<Archived />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
