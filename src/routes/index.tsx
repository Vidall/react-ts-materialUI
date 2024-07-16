import { Button, Icon } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

  useEffect(() => {
    setDrawerOption([
      {
        icon: 'home',
        path: '/inicio',
        label: 'Página inicial'
      },
      {
        icon: 'star',
        path: '/cidades',
        label: 'Cidades'
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/inicio" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}><Icon>menu</Icon></Button>}/>
      <Route path="/cidades" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}><Icon>star</Icon></Button>}/>
      <Route path="*" element={<Navigate to='/inicio'/>}/>
    </Routes>
  );
};