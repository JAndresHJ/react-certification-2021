// Material UI
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export const StyledAppBar = styled(AppBar)`
  div > * {
    color: ${(props) => props.theme.fg};
  }
  background-color: gray;
`;
