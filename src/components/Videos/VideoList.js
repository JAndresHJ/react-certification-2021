import React from 'react';

// Components
import VideoItem from './VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <>
      {videos &&
        videos.length > 0 &&
        videos.map((video, idx) => (
          <VideoItem
            key={video.id.videoId ? video.id.videoId : `${video.snippet.title}-${idx}`}
            description={video.snippet.description}
            title={video.snippet.title}
            publishTime={video.snippet.publishTime}
            thumbnails={video.snippet.thumbnails}
            onVideoSelect={onVideoSelect}
            video={video}
          />
        ))}
    </>
  );
};

export default VideoList;
