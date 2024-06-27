import { FC, useEffect, useRef, useState } from "react";
import style from "./InactivityDetector.module.scss";

const InactivityDetector: FC = () => {
  const [isInactive, setIsInactive] = useState<boolean>(false); // isInactive state to track user inactivity.
  //   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // timeoutRef to store the inactivity timer.
  const inactivityTime = 3000; // inactivityTime is the time period to consider as inactivity (30 seconds in this example).

  const resetTimer = () => {
    // Clears any existing timeout.
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Sets a new timeout to trigger inactivity after the specified period.
    timeoutRef.current = setTimeout(() => {
      setIsInactive(true);
    }, inactivityTime);
  };

  const handleActivity = () => {
    setIsInactive(false); // Resets the inactivity state to active.
    resetTimer(); // Resets the inactivity timer.
  };

  useEffect(() => {
    // Sets up event listeners for various user activities.
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
    ];
    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });
    resetTimer(); // Calls resetTimer to start the inactivity timer.

    // Cleans up event listeners and clears the timeout on component unmount.
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, []);

  return (
    <div className={style["inactivity-detector"]}>
      {isInactive ? <div>User is inactive</div> : <div>User is active</div>}
    </div>
  );
};

export default InactivityDetector;
