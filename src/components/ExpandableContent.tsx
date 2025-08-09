'use client';

import { useState } from 'react';

interface ExpandableContentProps {
  children: React.ReactNode;
  moreContent: string;
  buttonText?: string;
}

export default function ExpandableContent({ 
  children, 
  moreContent, 
  buttonText = "Couldn't understand! Explain me in simple terms" 
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable-content">
      {children}
      
      {isExpanded && (
        <div className="more-content">
          <p>{moreContent}</p>
        </div>
      )}
      
      <button 
        className="read-more-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Now I got it!" : buttonText}
        <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>
          ↓
        </span>
      </button>
    </div>
  );
}