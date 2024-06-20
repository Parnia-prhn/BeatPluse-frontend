import create from "zustand";

interface MusicPlayerState {
  showMusicPlayer: boolean;
  setShowMusicPlayer: (show: boolean) => void;
}

export const useMusicPlayerStore = create<MusicPlayerState>((set) => ({
  showMusicPlayer: false,
  setShowMusicPlayer: (show) => set({ showMusicPlayer: show }),
}));
