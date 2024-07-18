import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Environment } from '../../environment';

/*eslint-disable no-unused-vars*/
/*eslint-disable react/prop-types*/

interface IFerramentasDaListagemProps {
  textoDaBusca?: string,
  mostrarInputBusca?: boolean,
  aoMudarTextoDaBusca?: (novoTexto: string) => void
  textoBotaoNovo?: string,
  mostrarBotaoNovo?: boolean,
  aoClicarEmNovo?: () => void
}

/*eslint-disable no-undef*/
export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = (
  {
    textoDaBusca= '',
    mostrarInputBusca=false,
    aoMudarTextoDaBusca,
    aoClicarEmNovo,
    mostrarBotaoNovo=true,
    textoBotaoNovo='Novo'
  }
) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      component={Paper}
      display={'flex'}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      alignItems={'center'}>

      {mostrarInputBusca && (
        <TextField
          placeholder= {Environment.INPUT_DE_BUSCA}
          value={textoDaBusca}
          size='small'
          onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
        />
      )}
      
      <Box flex={1} display={'flex'} justifyContent={'end'}>
        { mostrarBotaoNovo && (
          <Button
            variant='contained'
            color='primary'
            disableElevation
            startIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};