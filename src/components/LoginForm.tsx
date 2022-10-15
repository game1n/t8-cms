import React, { ReactElement, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { getLoginLabel } from '../services/login.service';

import { initialLoginFormState } from '../constants/login.constants';

import { loginStates } from '../enums/login.enums';

import { LoginFormProps, LoginFormState } from '../models/login.models';

const LoginForm = ({ onButtonClick }: LoginFormProps): ReactElement => {
  const [formState, setFormState] = useState<LoginFormState>(
    initialLoginFormState
  );

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    onButtonClick(formState);
  };

  const loginLabel = getLoginLabel(formState.loginState);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          padding: '2em',
          height: 400,
          width: 400,
          border: '1px solid blue',
          borderRadius: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h4">{loginLabel}</Typography>
        <TextField
          label="email"
          variant="standard"
          type="email"
          value={formState.email}
          onChange={(e: any) =>
            setFormState({ ...formState, email: e.target.value })
          }
          fullWidth
          required
        />
        <TextField
          label="passsword"
          variant="standard"
          type="password"
          value={formState.password}
          onChange={(e: any) =>
            setFormState({ ...formState, password: e.target.value })
          }
          fullWidth
          required
        />
        {formState.loginState === 'SIGN_IN' && (
          <Typography
            onClick={() =>
              setFormState({ ...formState, loginState: loginStates.signUp })
            }
            sx={{ cursor: 'pointer' }}
          >
            Not having an account? Sign Up
          </Typography>
        )}
        {formState.loginState === 'SIGN_UP' && (
          <Typography
            onClick={() =>
              setFormState({ ...formState, loginState: loginStates.signIn })
            }
            sx={{ cursor: 'pointer' }}
          >
            Already having an account? Sign In
          </Typography>
        )}
        <Button
          variant="outlined"
          color="primary"
          sx={{ position: 'absolute', bottom: 10, right: 10 }}
          type="submit"
          onClick={submit}
          disabled={formState.email === ''}
        >
          {loginLabel}
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
