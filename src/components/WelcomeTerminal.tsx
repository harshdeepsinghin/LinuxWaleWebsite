'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';


export default function WelcomeTerminal() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [output, setOutput] = useState([
    'Welcome to LinuxWale',
    'Want to type your 1st Linux command?',
    '',
    'Type "echo hello world" to continue:'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);


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
    // Prevent scrolling on welcome page
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100vh';

    // Focus input after a short delay
    setTimeout(() => {
      inputRef.current?.focus();
      
      // For mobile devices, try to trigger keyboard
      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        inputRef.current?.click();
        // Additional attempts to open keyboard
        setTimeout(() => {
          inputRef.current?.focus();
          inputRef.current?.click();
        }, 200);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 500);
      }
    }, 100);

    // Global keydown listener for desktop
    const handleGlobalKeydown = (e: KeyboardEvent) => {
      // Only handle if input is not already focused and it's a printable character
      if (document.activeElement !== inputRef.current && 
          !e.ctrlKey && !e.altKey && !e.metaKey && 
          e.key.length === 1) {
        
        // Focus the input and add the character
        inputRef.current?.focus();
        
        // Add the character to input
        if (e.key !== ' ' || input.length > 0) { // Allow space only if not first character
          setInput(prev => prev + e.key);
        }
        
        e.preventDefault();
      }
      
      // Handle special keys
      if (document.activeElement !== inputRef.current) {
        if (e.key === 'Backspace') {
          inputRef.current?.focus();
          setInput(prev => prev.slice(0, -1));
          e.preventDefault();
        } else if (e.key === 'Enter') {
          inputRef.current?.focus();
          processCommand();
          e.preventDefault();
        }
      }
    };

    // Add global keydown listener
    document.addEventListener('keydown', handleGlobalKeydown);

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.removeEventListener('keydown', handleGlobalKeydown);
    };
  }, [input, processCommand]); // Add input and processCommand as dependencies

  // Auto-scroll whenever output changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand();
    }
  };

  const processCommand = useCallback(() => {
    const expectedCommand = commands[currentStep as keyof typeof commands];
    const currentInput = input.trim();

    // Clear input immediately
    setInput('');

    // Add the command to output
    const newOutput = [...output, `user@linuxwale:~$ ${currentInput}`];

    if (currentInput === expectedCommand) {
      // Correct command
      const response = responses[currentStep as keyof typeof responses];
      newOutput.push(response);

      if (currentStep === 1) {
        // Move to next step
        setOutput([...newOutput, '', promptMessages[2]]);
        setCurrentStep(2);
        inputRef.current?.focus();
        if (outputRef.current) {
          outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
      } else if (currentStep === 2) {
        // Complete - redirect to homepage
        redirectToHomepage();
      }
    } else {
      // Incorrect command
      newOutput.push('Command not found. Please try again.');
      setOutput([...newOutput, '', promptMessages[currentStep as keyof typeof promptMessages]]);
      inputRef.current?.focus();
      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight;
      }
    }

    setOutput(newOutput);
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [currentStep, input, output, promptMessages, responses, commands, redirectToHomepage]);

  const redirectToHomepage = useCallback(() => {
    // Mark as completed welcome
    localStorage.setItem('linuxwale_welcome_completed', 'true');
    localStorage.setItem('linuxwale_last_visit', Date.now().toString());

    // Redirect to homepage
    router.push('/');
  }, [router]);

  return (
    <div className="terminal-container">
      {/* Logo */}
      <div className="welcome-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/LW_W_on_B.webp"
          alt="LinuxWale Logo"
          className="logo-image"
          style={{
            width: '80px',
            height: '80px',
            boxShadow: '0 0 15px rgba(0, 255, 0, 0.4)'
          }}
        />
      </div>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-title">LinuxWale Terminal</div>
          <div className="terminal-controls">
            <div className="terminal-control close"></div>
            <div className="terminal-control minimize"></div>
            <div className="terminal-control maximize"></div>
          </div>
        </div>

        <div className="terminal-content">
          <div className="terminal-output" ref={outputRef}>
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
              autoFocus
              inputMode="text"
              enterKeyHint="go"
            />
            <span className="cursor"></span>
          </div>
        </div>
      </div>

      <button
        className="skip-button"
        onClick={redirectToHomepage}
        title="Skip the terminal experience"
      >
        <span className="skip-text">I&apos;m too lazy for Linux commands!</span>
        <span className="skip-subtext">Just take me to the site →</span>
      </button>
    </div>
  );
}