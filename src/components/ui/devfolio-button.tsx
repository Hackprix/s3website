"use client";

import React, { useEffect } from 'react';

interface DevfolioButtonProps {
  slug: string;
  theme?: 'light' | 'dark' | 'dark-inverted';
  height?: string;
  width?: string;
  className?: string;
}

export function DevfolioButton({ 
  slug, 
  theme = 'light', 
  height = '44px', 
  width = '312px',
  className 
}: DevfolioButtonProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={className}>
      <div 
        className="apply-button" 
        data-hackathon-slug={slug} 
        data-button-theme={theme}
        style={{ height, width }}
      ></div>
    </div>
  );
}
