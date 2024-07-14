import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export const AppRoute = () => {
  const {toggleTheme} = useAppThemeContext();

  return (
    <Routes>
      <Route path="/inicio" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Enviar</Button>}/>

      <Route path="*" element={<Navigate to='/inicio'/>}/>
    </Routes>
  );
};