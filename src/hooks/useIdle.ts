import { useEffect, useRef, useState } from "react";

const useIdle = (timeout: number) => {
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsIdle(false);
    timerRef.current = window.setTimeout(() => setIsIdle(true), timeout);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeout]);

  return isIdle;
};

export default useIdle;
