// Modules
import { useState } from 'react';
import { AUTH } from '../../constants/actionTypes';
import { Container, Avatar, Paper, Grid, Typography, Button } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// Styles, Components & Actions
import './auth.css';
import Input from './Input';
import { signUp, signIn } from '../../actions/auth';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, toggleForm] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    toggleForm(!isRegister);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = jwt_decode(res?.credential);

    try {
      dispatch({ type: AUTH, data: result });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {};

  return (
    <Container component="main" maxWidth="xs">
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
            <Grid item sm={12}>
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
            </Grid>
            {!isRegister && (
              <Grid justifyContent="center" item container>
                <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
              </Grid>
            )}
            <Grid justifyContent="center" marginTop={3} container>
              <Grid item>
                <Button onClick={switchMode} className="button__form-switch">
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
