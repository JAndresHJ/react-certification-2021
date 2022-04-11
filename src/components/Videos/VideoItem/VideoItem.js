import React from 'react';
import { useHistory } from 'react-router-dom';

// Material UI
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

// Styles
import { useStyles, StyledCard } from './styles';

const VideoItem = ({
  title,
  publishTime,
  thumbnails,
  description,
  onVideoSelect,
  video,
}) => {
  const classes = useStyles();

  const { push } = useHistory();

  const handleClick = () => {
    push(`/${video.id.videoId}`);
    onVideoSelect(video);
  };

  return (
    <StyledCard onClick={handleClick} className={classes.root}>
      <CardHeader title={title} subheader={publishTime.substring(0, 10)} />
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbnails.high.url} title={title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default VideoItem;
