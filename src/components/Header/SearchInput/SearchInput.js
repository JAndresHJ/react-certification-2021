import React, { useState, useContext } from 'react';

// Material UI
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

// Helpers
import { useStyles } from './styles';
import { ACTIONS } from '../../../store/GlobalContext/constants';

// Context
import GlobalContext from '../../../store/GlobalContext/GlobalContext';

const SearchInput = ({ onFormSubmit }) => {
  const classes = useStyles();
  const { dispatch } = useContext(GlobalContext);
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ACTIONS.SET_SEARCH_TERM,
      payload: term,
    });
    onFormSubmit(term);
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <form onSubmit={onSubmit}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(event) => setTerm(event.target.value)}
            value={term}
          />
        </form>
      </div>
      <div className={classes.grow} />
    </>
  );
};

export default SearchInput;
