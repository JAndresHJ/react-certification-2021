import styled from 'styled-components';

export const SelectedVideoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 345px);
  grid-template-rows: auto 1fr;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.bg.primary};
`;
