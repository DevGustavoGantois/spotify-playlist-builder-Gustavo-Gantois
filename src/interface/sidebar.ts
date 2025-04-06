import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
    view: string;
    setView: Dispatch<SetStateAction<string>>;
    setPlaylistUserId: Dispatch<SetStateAction<string | null>>;
  }
  

export interface PlaylistViewProps {
    playlistUserId: string | null;
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