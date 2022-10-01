import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
interface LoginFormProps {
  formTitle: string;
  onButtonClick: () => void;
}
const LoginForm = ({
  formTitle,
  onButtonClick,
}: LoginFormProps): ReactElement => {
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
        <Typography variant="h4">{formTitle}</Typography>
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          type="email"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="passsword"
          variant="standard"
          type="password"
          fullWidth
          required
        />
        <Button
          variant="outlined"
          color="primary"
          sx={{ position: 'absolute', bottom: 10, right: 10 }}
          onClick={onButtonClick}
          type="submit"
        >
          {formTitle}
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
