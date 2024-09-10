export const startTimer = (
    initialCounter: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>,
    onComplete: () => void
  ): number => {
    const timer = window.setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(timer);
          onComplete();
          return initialCounter;
        }
        return prevCounter - 1;
      });
    }, 1000);
  
    return timer;
  };