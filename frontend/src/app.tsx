import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ROUTES } from '../config/constants';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import Container from '@mui/material/Container';

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Container maxWidth={false} disableGutters>
        <Routes>
          <Route path={ROUTES.ROOT} element={<Login/>}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}