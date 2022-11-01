// Modules
import { Container, Avatar, Paper, Grid, Typography, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// Styles
import './auth.css';

// Components
import Input from './Input';
import { useState } from 'react';

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, toggleForm] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    toggleForm(!isRegister);
  };

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} className="paper__auth">
        <Avatar className="avatar__auth">
          {isRegister ? <AccountCircleOutlinedIcon /> : <LockOutlinedIcon />}
        </Avatar>
        <Typography variant="h5">{isRegister ? 'Register' : 'Login'}</Typography>
        <form className="form__auth" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isRegister && (
              <>
                <Input
                  name="firstName"
                  handleChange={handleChange}
                  label="First Name"
                  type="text"
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  handleChange={handleChange}
                  label="Last Name"
                  type="text"
                  half
                />
              </>
            )}
            <Input
              name="email"
              handleChange={handleChange}
              label="Email"
              type="email"
              autoFocus={!isRegister}
            />
            <Input
              name="password"
              handleChange={handleChange}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isRegister && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                handleChange={handleChange}
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="btn-submit__auth"
              size="large"
              fullWidth
            >
              {isRegister ? 'Register' : 'Login'}
            </Button>
            <Grid justifyContent="flex-end" container>
              <Grid item>
                <Button onClick={switchMode} style={{ textTransform: 'unset' }}>
                  {isRegister ? 'Already have an account?' : "Don't have an account?"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
