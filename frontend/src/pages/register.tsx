import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { ROUTES } from '../../config/constants';
import { PageLayoutAuth } from '../common/page-layout-auth';
import { API, request } from '../common/api';

export const Register: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = useCallback(
    () => {
      request(
        API.Register,
        {
          body: JSON.stringify({ username, password }),
          method: 'POST'
        }
      )
        .then(() => {
          navigate(ROUTES.DASHBOARD)
        })
    },
    [username, password]
  );

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
            type="password"
          />
        </Grid>

        <Grid item xs={12}>
          <Button color="primary" variant="contained" onClick={register}>
            Register
          </Button>
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography variant="body2" display="inline">
            Already have an account?
          </Typography>
          &nbsp;
          <Link variant="body2" onClick={() => navigate(ROUTES.ROOT)}>
            Log in
          </Link>
        </Grid>
      </Grid>
    </PageLayoutAuth>
  )
}