import { useState, useEffect } from "react";

export const OnlineOffline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const mouseEvent = () => setIsOnline(true);

    window.addEventListener("online", mouseEvent);
  }, []);
  return <>{isOnline ? "online" : "offline"}</>;
};
