import { useState, useEffect } from "react";

export const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));

  audio.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
  };
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return [playing, toggle] as const;
};
