import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import calm from "@/assets/calm.mp3.asset.json";

export function MusicPlayer() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const audio = new Audio(calm.url);
    audio.loop = true;
    audio.volume = 0.12;
    ref.current = audio;

    const tryPlay = () => {
      audio.play().then(() => setOn(true)).catch(() => {});
    };
    // attempt autoplay
    tryPlay();
    // fallback: start on first user gesture
    const onGesture = () => {
      if (!audio.paused) return;
      tryPlay();
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
    };
    window.addEventListener("pointerdown", onGesture, { once: true });
    window.addEventListener("keydown", onGesture, { once: true });

    return () => {
      audio.pause();
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
    };
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setOn(true)).catch(() => {});
    } else {
      a.pause();
      setOn(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Pause music" : "Play music"}
      className="fixed bottom-6 left-6 z-40 size-11 rounded-full bg-washi/90 backdrop-blur border border-indigo/15 text-indigo hover:bg-gold hover:text-washi shadow-lg transition-all duration-500 flex items-center justify-center"
    >
      {on ? <Volume2 className="size-4" strokeWidth={1.75} /> : <VolumeX className="size-4" strokeWidth={1.75} />}
    </button>
  );
}
