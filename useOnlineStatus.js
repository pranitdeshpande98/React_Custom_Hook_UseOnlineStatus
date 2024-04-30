import { useState, useEffect } from 'react';

function useOnlineStatus(timeout) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    let timeoutId;

    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      timeoutId = setTimeout(() => setIsOnline(false), timeout);
    };

    // Initial setup
    checkOnlineStatus();

    // Event listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, [timeout]);

  return isOnline;
}

export default useOnlineStatus;
