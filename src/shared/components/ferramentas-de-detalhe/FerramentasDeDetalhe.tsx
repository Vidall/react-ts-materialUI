import { Box, Icon, Button, useTheme, Paper, Divider, Skeleton } from '@mui/material';

interface IFerramentasDaListagemProps {
  textoBotaoNovo?: string,
  mostrarBotaoNovo?: boolean,
  mostrarBotaoVoltar?: boolean,
  mostrarBotaoApagar?: boolean,
  mostrarBotaoSalvar?: boolean,
  mostrarBotaoSalvarEFechar?: boolean,

  mostrarBotaoNovoCarregando?: boolean,
  mostrarBotaoVoltarCarregando?: boolean,
  mostrarBotaoApagarCarregando?: boolean,
  mostrarBotaoSalvarCarregando?: boolean,
  mostrarBotaoSalvarEFecharCarregando?: boolean,
  
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

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,
    
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
      { (mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && ( 

        <Button
          variant={'contained'}
          color='primary'
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          {'Salvar'}
        </Button>
      )}

      {mostrarBotaoSalvarCarregando &&(
        <Skeleton width={110} height={60} />
      )}
      
      { (mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          {'Salvar e voltar'}
        </Button>
      )}

      { mostrarBotaoSalvarEFecharCarregando &&(
        <Skeleton width={180} height={60}/>
      )} 

      { (mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          {'Apagar'}
        </Button>
      )}

      {mostrarBotaoApagarCarregando &&(
        <Skeleton width={110} height={60} />
      )}

      { (mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}

      {mostrarBotaoNovoCarregando &&(
        <Skeleton width={110} height={60} />
      )}

      <Divider
        variant='middle'
        orientation='vertical'
      />

      { (mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          {'Voltar'}
        </Button>
      )}

      {mostrarBotaoVoltarCarregando &&(
        <Skeleton width={110} height={60} />
      )}

    </Box>
    
  );
};