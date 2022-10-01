import {Button, Typography} from '@mui/material';

export const NotFound = () => {
    return (
        <div>
            <Typography variant='h2'>404: Oops :( page not found</Typography>
            <Button variant='contained' color='secondary' href='/'>
                Go Home
            </Button>
        </div>
    );
}