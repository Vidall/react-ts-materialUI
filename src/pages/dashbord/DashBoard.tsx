import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';
import { Box } from '@mui/material';

export const DashBoard = () => {
  return (
    <>      
      <LayoutBase titulo='DashBoard' barraDeFerramentas={
        (
          <FerramentasDeDetalhe mostrarBotaoApagar/>
          // <FerramentasDaListagem mostrarInputBusca/>
        )}>

        <Box display='flex' justifyContent='center' height={400} width="100%">

          <Box sx={{
            height: '400px',
            overflow: 'auto',
            padding: '30px'       
          }}>
          </Box>

        </Box>

      </LayoutBase>
    </>
  );
};