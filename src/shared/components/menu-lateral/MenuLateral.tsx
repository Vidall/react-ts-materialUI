import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDrawerContext } from '../../contexts';

interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
        <Box width={theme.spacing(28)} height={'100%'} display={'flex'} flexDirection={'column'}>
          <Box width={'100%'} height={theme.spacing(20)} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Avatar
              src='#'
              sx={
                {
                  width: theme.spacing(12),
                  height: theme.spacing(12)
                }
              }
            />
          </Box>

          <Divider/>

          <Box flex={1}>,
            <List component={'nav'}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Pagina inicial" />
              </ListItemButton>
            </List>
            <Divider />
            
          </Box>

        </Box>              
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? theme.spacing(0) : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};