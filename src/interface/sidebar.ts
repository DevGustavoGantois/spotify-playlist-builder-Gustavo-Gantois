import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
    view: string;
    setView: Dispatch<SetStateAction<string>>;
    setPlaylistUserId: Dispatch<SetStateAction<string | null>>;
    setTrackUserPlayingMusic: Dispatch<SetStateAction<string | null>>;
  }
  

export interface PlaylistViewProps {
    playlistUserId: string | null;
    setPlaySongId: Dispatch<SetStateAction<string | null>>;
}

export interface PlaylistProps {
    id: string;
    name: string;
    [key: string]: any;
}

export interface PlaylistTrackItem {
    track: {
      id: string;
      name: string;
      artists: { name: string }[];
    };
  }

export interface PlayProps {
  playSongId: string | unknown;
  globalCurrentSongId:  Dispatch<SetStateAction<string | null>>;
  setGlobalCurrentSongId:  Dispatch<SetStateAction<string | null>>;
  setGlobalIsTrackPlaying: Dispatch<SetStateAction<string | null>>;
}

export interface PlayerProps {
  setTrackUserPlayingMusic: React.Dispatch<React.SetStateAction<string | null>>;
  trackUserPlayingMusic: string | null;
  setPlaySongId: React.Dispatch<React.SetStateAction<string | null>>;
  playSongId: string | null;
}