import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
    view: string;
    setView: Dispatch<SetStateAction<string>>;
    setPlaylistUserId: Dispatch<SetStateAction<string | null>>
}