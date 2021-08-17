// React libraries
import React from 'react';

// Material UI
import Toolbar from '@material-ui/core/Toolbar';

// External Components
import DesktopMenu from './DesktopMenu';
import SearchInput from './SearchInput';
import BurgerMenu from './BurgerMenu';
import MobileMenu from './MobileMenu';

// Helpers
import { useStyles, StyledAppBar } from './styles';

export default function Header({ search }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <StyledAppBar position="static">
        <Toolbar>
          <BurgerMenu />
          <SearchInput onFormSubmit={search} />
          <DesktopMenu />
          <MobileMenu />
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
