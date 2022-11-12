import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LOGOUT } from '../../constants/actionTypes';
import { AppBar, Typography, Button, Avatar, Toolbar } from '@mui/material';

import memories from '../../images/memories.png';
import './styles.css';

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleLogout = () => {
    dispatch({ type: LOGOUT });

    navigate('/auth');

    setUser(null);
  };

  useEffect(() => {
    // const token = user?.sub;

    // JWT....
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className="app-bar" position="static">
      <div className="brand-container">
        <Typography component={Link} to="/" className="heading" variant="h3" align="center">
          Memories
          <img className="image" src={memories} alt="memories" />
        </Typography>
      </div>
      <Toolbar className="toolbar">
        {user ? (
          <div className="profile">
            <Avatar className="purple" alt={user.name} src={user.picture}>
              {user.name.charAt(0)}
            </Avatar>
            <Typography className="username" variant="h6">
              {user.given_name}
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
