import { useEffect, createContext, useContext } from 'react';
import useSound from 'use-sound';
import musicTheme from '../../assets/music.mp3';

const MusicContext = createContext();

// eslint-disable-next-line react/prop-types
export const MusicProvider = ({ children }) => {
  const [play, { stop }] = useSound(musicTheme);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <MusicContext.Provider value={{ play, stop }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  return useContext(MusicContext);
};
