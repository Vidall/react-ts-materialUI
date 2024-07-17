import { Box, Icon, Button, useTheme, Paper, Divider } from '@mui/material';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string,
  mostrarInputBusca?: boolean,
  /*eslint-disable-next-line no-unused-vars*/
  aoMudarTextoDaBusca?: (novoTexto: string) => void
  textoBotao?: string,
  mostrarBotaoNovo?: boolean,
  aoClicarEmNovo?: () => void
}

/*eslint-disable no-undef*/
export const FerramentasDeDetalhe: React.FC<IFerramentasDaListagemProps> = () => {
  const theme = useTheme();
  return (
    <Box 
      height={theme.spacing(5)}
      component={Paper}
      display={'flex'}
      alignItems={'center'}
      marginX={1}
      paddingX={2}
      padding={1}
      gap={1}
    >
      <Button
        variant={'contained'}
        color='primary'
        disableElevation
        startIcon={<Icon>save</Icon>}
      >
        {'Salvar'}
      </Button>

      <Button
        variant={'outlined'}
        color='primary'
        disableElevation
        startIcon={<Icon>save</Icon>}
      >
        {'Salvar e voltar'}
      </Button>

      <Button
        variant={'outlined'}
        color='primary'
        disableElevation
        startIcon={<Icon>delete</Icon>}
      >
        {'Apagar'}
      </Button>

      <Divider
        variant='middle'
        orientation='vertical'
      />

      <Button
        variant={'outlined'}
        color='primary'
        disableElevation
        startIcon={<Icon>arrow_back</Icon>}
      >
        {'Voltar'}
      </Button>

    </Box>
    
  );
};