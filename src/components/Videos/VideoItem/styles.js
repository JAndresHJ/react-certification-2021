import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px 0',
  },
  media: {
    height: 140,
  },
});

export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.bg.secondary};
  div > * {
    color: ${(props) => props.theme.text};
  }
  & :hover {
    cursor: pointer;
  }
`;
