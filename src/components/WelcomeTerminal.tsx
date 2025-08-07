'use client';

import { useState, useEffect, useRef } from 'react';


export default function WelcomeTerminal() {
  const [input, setInput] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [output, setOutput] = useState([
    'Welcome to LinuxWale Terminal v1.0',
    'Initializing Linux community portal...',
    'Connection established. Ready for commands.',
    '',
    'Type "echo namaste world" to continue:'
  ]);
  const [showTerminal, setShowTerminal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


  const commands = {
    1: 'echo namaste world',
    2: 'cd /Home'
  };

  const responses = {
    1: 'namaste world & Congrats',
    2: 'Entering LinuxWale homepage...'
  };

  const promptMessages = {
    1: 'Type "echo namaste world" to continue:',
    2: 'Type "cd /Home" to enter the site:'
  };

  useEffect(() => {
    // Check if user has completed welcome before
    const hasCompleted = localStorage.getItem('linuxwale_welcome_completed');
    if (!hasCompleted) {
      setShowTerminal(true);
      // Focus input after a short delay
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand();
    }
  };

  const processCommand = () => {
    const expectedCommand = commands[currentStep as keyof typeof commands];
    
    // Add the command to output
    const newOutput = [...output, `user@linuxwale:~$ ${input}`];
    
    if (input.trim() === expectedCommand) {
      // Correct command
      const response = responses[currentStep as keyof typeof responses];
      newOutput.push(response);
      
      if (currentStep === 1) {
        // Move to next step
        setTimeout(() => {
          setOutput([...newOutput, '', promptMessages[2]]);
          setCurrentStep(2);
          setInput('');
          inputRef.current?.focus();
        }, 1000);
      } else if (currentStep === 2) {
        // Complete - redirect to homepage
        setTimeout(() => {
          redirectToHomepage();
        }, 1500);
      }
    } else {
      // Incorrect command
      newOutput.push('Command not found. Please try again.');
      setTimeout(() => {
        setOutput([...newOutput, '', promptMessages[currentStep as keyof typeof promptMessages]]);
        setInput('');
        inputRef.current?.focus();
      }, 1000);
    }
    
    setOutput(newOutput);
  };

  const redirectToHomepage = () => {
    // Mark as completed welcome
    localStorage.setItem('linuxwale_welcome_completed', 'true');
    localStorage.setItem('linuxwale_last_visit', Date.now().toString());
    
    // Hide terminal with transition
    setShowTerminal(false);
  };

  if (!showTerminal) {
    return null;
  }

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-title">LinuxWale Terminal</div>
          <div className="terminal-controls">
            <div className="terminal-control close"></div>
            <div className="terminal-control minimize"></div>
            <div className="terminal-control maximize"></div>
          </div>
        </div>
        
        <div className="terminal-output">
          {output.map((line, index) => (
            <div key={index} className="terminal-line">
              <span className={line.startsWith('user@') ? 'terminal-command' : 'terminal-response'}>
                {line}
              </span>
            </div>
          ))}
        </div>
        
        <div className="terminal-input-line">
          <span className="terminal-prompt">user@linuxwale:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  );
}