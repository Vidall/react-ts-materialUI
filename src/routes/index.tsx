import { Navigate, Route, Routes } from 'react-router';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { DashBoard } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOption } = useDrawerContext();

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
      <Route path="/inicio" element={<DashBoard/>}/>

      <Route path="*" element={<Navigate to='/inicio'/>}/>
    </Routes>
  );
};