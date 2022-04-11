import React, { useEffect, useState, useContext } from 'react';

// Components
import VideoList from '../../components/Videos';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

// Custom hooks
import useVideos from '../../hooks/useVideos';

// Context
import GlobalContext from '../../store/GlobalContext/GlobalContext';

// Styled components
import { SelectedVideoWrapper } from './SelectedVideo.styled';

const SelectedVideo = () => {
  const { state } = useContext(GlobalContext);
  const { videos } = useVideos(state.searchTerm);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <SelectedVideoWrapper>
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </SelectedVideoWrapper>
  );
};

export default SelectedVideo;
