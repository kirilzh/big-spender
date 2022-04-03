import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, PaletteMode, Theme, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ROUTES } from '../config/constants';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { Register } from './pages/register';

export const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const theme = useMemo(
    () => createTheme({
      palette: { mode },
      components: {
        MuiLink: {
          defaultProps: {
            sx: {
              cursor: 'pointer',
              textDecoration: 'none'
            }
          }
        }
      }
    }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth={false} disableGutters>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.ROOT} element={<Login/>} />
            <Route path={ROUTES.REGISTER} element={<Register/>}/>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}