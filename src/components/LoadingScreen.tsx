import { useEffect, useState } from 'react';
import prGroupLogo from '@/assets/pr-group-logo.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="flex flex-col items-center space-y-6">
        <div className="animate-pulse">
          <img 
            src={prGroupLogo} 
            alt="PR Group Logo" 
            className="w-40 h-40 object-contain"
          />
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;