import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Home from './home';
import Creator from './creator';
import NewContent from './Content';

const NavBar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear the user's token and log them out
    localStorage.removeItem('token');
    setUserLoggedIn(false);
    // Redirect the user to the login page
    history.push('/login');
  };

  return (
    <div>
      <h2>Navigation</h2>
      <ul>
        {userLoggedIn ? (
          <>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/creator'>Creator</Link></li>
            <li><Link to='/Content'>Create Content</Link></li>
            <li><Link to='/logout' onClick={handleLogout}>Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </>
        )}
      </ul>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      {userLoggedIn && <Route path='/home' component={Home} />}
      {userLoggedIn && <Route path='/creator' component={Creator} />}
      {userLoggedIn && <Route path='/content' component={NewContent} />}

    </div>
  );
};

export default NavBar;
