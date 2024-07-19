import { Box, Icon, Button, useTheme, Paper, Divider, Skeleton, Typography, useMediaQuery, Theme } from '@mui/material';

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
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
          <Typography variant={'button'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'} fontSize={smDown || mdDown ? theme.spacing(1.2) : theme.spacing(1.7)}>
            {'Salvar'}
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando &&(
        <Skeleton width={110} height={60} />
      )}
      
      { (mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown) && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>save</Icon>}
          
        >
          <Typography variant={'button'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}>
            {'Salvar e fechar'}
          </Typography>
        </Button>
      )}

      { (mostrarBotaoSalvarEFecharCarregando && !smDown) &&(
        <Skeleton width={180} height={60}/>
      )} 

      { (mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>delete</Icon>}
          
        >
          <Typography variant={'button'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'} fontSize={smDown ? theme.spacing(1.2) : theme.spacing(1.7)}>
            {'Apagar'}
          </Typography>
        </Button>
      )}

      {mostrarBotaoApagarCarregando &&(
        <Skeleton width={110} height={60} />
      )}

      { (mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (

        <Button
          variant={'outlined'}
          color='primary'
          disableElevation
          startIcon={<Icon>add</Icon>}
          
        >
          <Typography variant={'button'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}>
            {textoBotaoNovo}
          </Typography>
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
          <Typography variant={'button'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'} fontSize={smDown  ? theme.spacing(1.2) : theme.spacing(1.7)}>
            {'Voltar'}
          </Typography>
        </Button>
      )}

      {(mostrarBotaoVoltarCarregando && !smDown) &&(
        <Skeleton width={110} height={60} />
      )}

    </Box>
    
  );
};