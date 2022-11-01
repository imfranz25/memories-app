// Modules
import { Container, Avatar, Paper, Grid, Typography, Button } from '@mui/material';

// Styles
import './styles.css';

// Components
import Input from './Input';
import { useState } from 'react';

function Auth() {
  const isRegister = false;
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} className="paper">
        <Avatar className="avatar">{/* <LookOutlined /> */}</Avatar>
        <Typography variant="h5">{isRegister ? 'Register' : 'Login'}</Typography>
        <form className="form" onSubmit={handleSubmit}>
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
              className="btn-submit"
              size="large"
              fullWidth
            >
              {isRegister ? 'Register' : 'Login'}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
