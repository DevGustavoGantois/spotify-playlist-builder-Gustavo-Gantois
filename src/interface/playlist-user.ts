export interface Artist {
    id: string;
    name: string;
  }
  
export interface Track {
    id: string;
    uri: string;
    name: string;
    duration_ms: number;
    album: {
      name: string;
      images: { url: string }[];
    };
    artists: Artist[];
  }
  
export interface SongProps {
    sno: number;
    track: Track;
    setGlobalCurrentSongId: (id: string) => void;
    setGlobalIsTrackPlaying: (playing: boolean) => void;
    setView: (view: string) => void;
    setGlobalArtistId: (id: string) => void;
  }