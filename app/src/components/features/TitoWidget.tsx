import { useEffect, useRef } from 'react';

interface TitoWidgetProps {
  event?: string;
}

const TitoWidget = ({ event = "tedxpup/tedxpup2026" }: TitoWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content
      containerRef.current.innerHTML = '';
      
      // Create the tito-widget element
      const titoWidget = document.createElement('tito-widget');
      titoWidget.setAttribute('event', event);
      
      containerRef.current.appendChild(titoWidget);
    }
  }, [event]);

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-4xl mx-auto p-4 flex justify-center"
    />
  );
};

export default TitoWidget;
