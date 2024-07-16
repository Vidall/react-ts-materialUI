import { Avatar, Divider, Drawer, Icon, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery, List } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

/*eslint-disable @typescript-eslint/no-unused-expressions*/

interface IListItemLinkProps {
  label: string,
  icon: string,
  to: string,
  onClick: (() => void) | undefined

}

interface IMenuLateralProps {
  children: React.ReactNode
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick}) => {
  const navigate = useNavigate();

  const resolvedpath = useResolvedPath(to);
  const match = useMatch({path: resolvedpath.pathname, end: false});

  const handleClick = () => {
    navigate(to),
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
        <Box width={theme.spacing(28)} height={'100%'} display={'flex'} flexDirection={'column'}>
          <Box width={'100%'} height={theme.spacing(20)} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Avatar
              src='https://scontent.fsdu12-2.fna.fbcdn.net/v/t1.6435-1/177033502_2030034907137076_4333123289953383891_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeHnyLCnSvPUsRg6CdEwHk2qLfzloKFWlost_OWgoVaWizsxP6k0Ui7WBkDt-pgs_SLOFg10jxzctj4ZASxkVsgC&_nc_ohc=F-xq5YRbsjcQ7kNvgEDUfg2&_nc_ht=scontent.fsdu12-2.fna&oh=00_AYA70i4C3gfijZ4gybrn4H2O_DXHDEkQafEVtfNDN2ck1g&oe=66BC4C48'
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
              {drawerOptions.map(drawerOptions => (
                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  to={drawerOptions.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
            
          </Box>

        </Box>              
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? theme.spacing(0) : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};