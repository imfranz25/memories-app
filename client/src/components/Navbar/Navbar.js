import { AppBar, Typography } from '@mui/material';

import memories from '../../images/memories.png';
import './styles.css';
function Navbar() {
  return (
    <AppBar className="app-bar" position="static">
      <Typography className="heading" variant="h2" align="center">
        Memories
        <img className="image" src={memories} alt="memories" />
      </Typography>
    </AppBar>
  );
}

export default Navbar;
