import { Button, Icon } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route path="/inicio" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
        <Icon>
          menu
        </Icon>
      </Button>}/>

      <Route path="*" element={<Navigate to='/inicio'/>}/>
    </Routes>
  );
};