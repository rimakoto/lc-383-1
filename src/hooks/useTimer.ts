import { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

export function useTimer() {
  const startTime = useGameStore((s) => s.startTime);
  const endTime = useGameStore((s) => s.endTime);
  const isCompleted = useGameStore((s) => s.isCompleted);
  const setElapsed = useGameStore((s) => s.setElapsed);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startTime) return;

    const tick = () => {
      const now = isCompleted && endTime ? endTime : Date.now();
      setElapsed(now - startTime);
      if (!isCompleted) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [startTime, endTime, isCompleted, setElapsed]);
}
