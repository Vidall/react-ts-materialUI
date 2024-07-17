import { Box, Icon, Button, useTheme, Paper, Divider } from '@mui/material';

interface IFerramentasDaListagemProps {
  textoBotaoNovo?: string,
  mostrarBotaoNovo?: boolean,
  mostrarBotaoVoltar?: boolean,
  mostrarBotaoApagar?: boolean,
  mostrarBotaoSalvar?: boolean,
  mostrarBotaoSalvarEFechar?: boolean,
  
  aoClicarEmBotaoNovo?: () => void
  aoClicarEmBotaoSalvar?: () => void
  aoClicarEmBotaoSalvarEFechar?: () => void
  aoClicarEmVoltar?: () => void
  aoClicarEmBotaoApagar?: () => void
}

/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/
/*eslint-disable react/prop-types*/
/*eslint-disable @typescript-eslint/no-unused-vars*/
export const FerramentasDeDetalhe: React.FC<IFerramentasDaListagemProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvarEFechar = false,
  
  aoClicarEmBotaoNovo,
  aoClicarEmBotaoSalvar,
  aoClicarEmBotaoSalvarEFechar,
  aoClicarEmVoltar,
  aoClicarEmBotaoApagar
}) => {
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
      { mostrarBotaoSalvar && (

        <Button
          variant={'contained'}
          color='primary'
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          {'Salvar'}
        </Button>
      )}

      { mostrarBotaoSalvarEFechar && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          {'Salvar e voltar'}
        </Button>
      )}

      { mostrarBotaoApagar && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          {'Apagar'}
        </Button>
      )}

      { mostrarBotaoNovo && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}

      <Divider
        variant='middle'
        orientation='vertical'
      />

      { mostrarBotaoVoltar && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          {'Voltar'}
        </Button>
      )}

    </Box>
    
  );
};