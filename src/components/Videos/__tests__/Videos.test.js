import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import { ThemeProvider } from 'styled-components';
import VideoList from '../VideoList';

// Utils
import mockedVideos from '../../../utils/youtube-videos-mock.json';

const { items } = mockedVideos;
const theme = {
  fg: 'black',
  bg: { primary: 'white', secondary: 'white' },
  text: 'black',
  border: '#383838',
};

describe('Video component', () => {
  it('displays the list of the videos', () => {
    render(
      <ThemeProvider theme={theme}>
        <VideoList videos={items} />
      </ThemeProvider>
    );

    const cardElements = screen.getAllByRole('button');

    expect(cardElements).toHaveLength(items.length);
  });
});
