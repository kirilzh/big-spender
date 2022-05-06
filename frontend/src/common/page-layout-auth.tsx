import { FC } from 'react';
import Container from '@mui/material/Container';

export const PageLayoutAuth: FC = ({ children }) => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
    >
      {children}
    </Container>
  )
}