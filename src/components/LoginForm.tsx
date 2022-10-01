import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
interface LoginFormProps {
    onButtonClick: (formState: { email: string; password: string, loginState: 'SIGN_IN' | 'SIGN_UP' }) => void;
}
const LoginForm = ({onButtonClick }: LoginFormProps) => {
    const [formState, setFormState] = useState<{ email: string; password: string, loginState: 'SIGN_IN' | 'SIGN_UP' }>({ email: "", password: "", loginState: 'SIGN_IN' })

    const submit = () => {
        onButtonClick(formState);
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
        }}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    display: 'flex', flexDirection: 'column', gap: '6px', padding: '2em', height: 400, width: 400, border: '1px solid blue', borderRadius: '12px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Typography variant="h4">{formState.loginState === 'SIGN_IN' ? 'Login' : 'Sign Up'}</Typography>
                <TextField label="email" variant="standard" type="email" value={formState.email} onChange={(e: any) => setFormState({ ...formState, email: e.target.value })} fullWidth required />
                <TextField label="passsword" variant="standard" type="password" value={formState.password} onChange={(e: any) => setFormState({ ...formState, password: e.target.value })} fullWidth required />
                {formState.loginState === 'SIGN_IN' && (<Typography onClick={() => setFormState({...formState, loginState: 'SIGN_UP'})} sx={{cursor: 'pointer'}}>Not having an account? Sign Up</Typography>)}
                {formState.loginState === 'SIGN_UP' &&  (<Typography  onClick={() => setFormState({...formState, loginState: 'SIGN_IN'})} sx={{cursor: 'pointer'}}>Already having an account? Sign In</Typography>)}
                <Button variant="outlined" color="primary" sx={{ position: 'absolute', bottom: 10, right: 10, }} onClick={submit} disabled={formState.email === ''}>{formState.loginState === 'SIGN_IN' ? 'Login' : 'Sign Up'}</Button>
            </Box>
        </div>
    )
}

export default LoginForm