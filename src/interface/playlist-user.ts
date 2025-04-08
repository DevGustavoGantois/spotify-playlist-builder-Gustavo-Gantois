export interface Artist {
    id: string;
    name: string;
  }
  
  

  export interface SongProps {
    sno: number;
    track: any;
    setView: React.Dispatch<React.SetStateAction<string>>;
    setGlobalIsTrackPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setGlobalCurrentSongId: (id: string) => void;
    setGlobalArtistId: (id: string) => void;
    id: string;
    uri: string;
    name: string;
    owner: string;
  }
  export interface FeatPlaylistsProps {
    setView: React.Dispatch<React.SetStateAction<string>>;
    setGlobalIsTrackPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setGlobalCurrentSongId: (id: string) => void;
    setGlobalArtistId: (id: string) => void;
  }

  export interface SearchResultsProps {
    searchMusicData: any;
    setView: React.Dispatch<React.SetStateAction<string>>;
    setGlobalCurrentSongId: React.Dispatch<React.SetStateAction<string | null>>;
    setGlobalIsTrackPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setGlobalArtistId: React.Dispatch<React.SetStateAction<string | null>>;
  }