import React, { useState, useContext } from 'react';

// Material UI
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';

// Helpers
import { useStyles } from './styles';
import { ACTIONS, LS_KEYS } from '../../../store/GlobalContext/constants';

// Context
import GlobalContext from '../../../store/GlobalContext/GlobalContext';
import LoginDialog from '../../LoginDialog';

const menuId = 'primary-search-account-menu';

const DesktopMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { dispatch } = useContext(GlobalContext);
  const [isDarkMode, setIsDarkedMode] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const handleChange = (event) => {
    setIsDarkedMode(event.target.checked);
    dispatch({
      type: ACTIONS.SET_IS_DARK_MODE,
      payload: event.target.checked,
    });

    localStorage.setItem(
      LS_KEYS.APP_THEME,
      JSON.stringify({ isDarkMode: event.target.checked })
    );
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLoginDialogOpen(true);
  };

  const isMenuOpen = Boolean(anchorEl);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.sectionDesktop}>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={handleChange} name="dark-mode" />}
        label="Dark mode"
      />
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {renderMenu}
      <LoginDialog isOpen={loginDialogOpen} close={() => setLoginDialogOpen(false)} />
    </div>
  );
};

export default DesktopMenu;
