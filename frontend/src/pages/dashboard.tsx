import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Dashboard = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <AppBar position="relative">
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              BigSpender
            </Typography>

            <Button color="secondary" variant="contained">
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Typography variant="h4">
          Static website
        </Typography>
      </Container>
    </Container>

  )
}