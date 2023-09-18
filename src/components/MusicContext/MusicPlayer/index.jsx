import { useMusic } from '../MusicContext';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Button from '@mui/material/Button';
import { StyledMediaPlayer } from './styles';

const MusicPlayer = () => {
  const { play, stop } = useMusic();

  return (
    <StyledMediaPlayer>
      <Box
        className="music"
        sx={{
          position: 'fixed',
          top: { xs: '', md: '10px' },
          right: '10px',
          backgroundColor: 'rgb(193 188 140)',
          borderRadius: { xs: '9px', md: '18px' },
          opacity: '0.6',
          width: { xs: '36px', md: '128px' },
          bottom: { xs: '10px', md: 'auto' },
        }}
      >
        <Button onClick={play} color="inherit">
          <PlayArrowIcon />
        </Button>
        <Button onClick={() => stop()} color="inherit">
          <StopIcon />
        </Button>
      </Box>
    </StyledMediaPlayer>
  );
};

export default MusicPlayer;
