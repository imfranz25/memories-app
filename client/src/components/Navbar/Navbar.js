import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Avatar, Toolbar } from '@mui/material';

import memories from '../../images/memories.png';
import './styles.css';
function Navbar() {
  const user = null;
  return (
    <AppBar className="app-bar" position="static">
      <div className="brand-container">
        <Typography component={Link} to="/" className="heading" variant="h2" align="center">
          Memories
          <img className="image" src={memories} alt="memories" />
        </Typography>
      </div>
      <Toolbar className="toolbar">
        {user ? (
          <div className="profile">
            <Avatar className="purple" alt={user.result.name} src={user.result.image}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className="username" variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary">
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
