import { Navigate, Route, Routes } from 'react-router';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { DashBoard, ListagemDeCidade } from '../pages';

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
        icon: 'location_city',
        path: '/cidades',
        label: 'Cidades'
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/inicio" element={<DashBoard/>}/>

      <Route path="/cidades" element={<ListagemDeCidade/>}/>

      <Route path="*" element={<Navigate to='/inicio'/>}/>
    </Routes>
  );
};