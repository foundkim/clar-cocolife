import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';


const getInitials = (name = '') => name
  .replace(/\s+/, ' ')
  .split(' ')
  .slice(0, 2)
  .map((v) => v && v[0].toUpperCase())
  .join('');

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
  }));
  
  export const DashboardNavbar = (props) => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const { onSidebarOpen, ...other } = props;
  
    return (
      <>
        <DashboardNavbarRoot
          sx={{
            left: {
              lg: 280
            },
            width: {
              lg: 'calc(100% - 280px)'
            }
          }}
          {...other}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
              left: 0,
              px: 2
            }}
          >
            <IconButton
              onClick={onSidebarOpen}
              sx={{
                display: {
                  xs: 'inline-flex',
                  lg: 'none'
                }
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            {/* <Tooltip title="Search">
              <IconButton sx={{ ml: 1 }}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Tooltip> */}
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip onClick={() => dispatch(logout())} title="Se deconnecter">
            <IconButton sx={{ ml: 1 }}>
                <LogoutIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {/* <Tooltip title="Notifications">
              <IconButton sx={{ ml: 1 }}>
                <Badge
                  badgeContent={4}
                  color="primary"
                  variant="dot"
                >
                  <BellIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Avatar
              sx={{
                height: 40,
                width: 40,
                ml: 1
              }}
              src="/static/images/avatars/avatar_1.png"
            >
             {auth.user && getInitials(auth.user.full_name)}
            </Avatar>
          </Toolbar>
        </DashboardNavbarRoot>
      </>
    );
  };
  
  DashboardNavbar.propTypes = {
    onSidebarOpen: PropTypes.func
  };