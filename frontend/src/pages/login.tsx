import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ROUTES } from '../../config/constants';
import { PageLayoutAuth } from '../common/page-layout-auth';

export const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <PageLayoutAuth>
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

        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography variant="body2" display="inline">
            Don't have an account?
          </Typography>
          &nbsp;
          <Link variant="body2" onClick={() => navigate(ROUTES.REGISTER)}>
            Register
          </Link>
        </Grid>
      </Grid>
    </PageLayoutAuth>
  )
}