import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            size="small"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            size="small"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <Button color="primary" variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}