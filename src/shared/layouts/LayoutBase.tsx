import { Icon, IconButton, Typography, useTheme } from '@mui/material';
import { Box, useMediaQuery } from '@mui/system';
import { useDrawerContext } from '../contexts';
import { ReactNode } from 'react';

/*eslint-disable no-undef*/

interface ILayoutBaseProps {
  titulo: string, 
  barraDeFerramentas?: ReactNode, 
  children?: React.ReactNode
}

/*eslint-disable-next-line no-undef*/
/*eslint-disable-next-line react/prop-types*/
export const LayoutBase: React.FC<ILayoutBaseProps> = ({titulo, children, barraDeFerramentas}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const {toggleDrawerOpen} = useDrawerContext();
 
  return (
    <Box height={'100%'} display={'flex'} flexDirection={'column'} gap={1}>
      <Box padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} display={'flex'} alignItems={'center'}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>          
            <Icon>
            menu
            </Icon>
          </IconButton>
        )}

        <Typography 
          variant={smDown ? 'h4' : mdDown ? 'h3' : 'h2'}
          whiteSpace={'nowrap'} //para não quebrar linha
          overflow={'hidden'} 
          textOverflow={'ellipsis'} // corta o texto e coloca abreviado
        >
          { titulo }
        </Typography>
      </Box>

      { barraDeFerramentas && (
        <Box>
          { barraDeFerramentas } 
        </Box>
      )

      }

      <Box flex={1} overflow={'auto'}>
        { children }
      </Box>

    </Box>
  );
};