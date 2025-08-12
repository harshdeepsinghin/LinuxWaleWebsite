'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';


export default function WelcomeTerminal() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'Welcome to LinuxWale',
    'Type "help" to see available commands or start exploring!'
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('/');
  const [windowSize, setWindowSize] = useState({ width: 800, height: 300 });
  const [isResizing, setIsResizing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Available directories (website pages)
  const availableDirectories = useMemo(() => [
    '/home',
    '/about',
    '/services',
    '/contact',
    '/welcome'
  ], []);

  const redirectToHomepage = useCallback(() => {
    // Mark as completed welcome
    if (typeof window !== 'undefined') {
      localStorage.setItem('linuxwale_welcome_completed', 'true');
      localStorage.setItem('linuxwale_last_visit', Date.now().toString());
    }

    // Redirect to homepage
    router.push('/');
  }, [router]);

  const processCommand = useCallback(() => {
    const currentInput = input.trim();

    // Clear input immediately
    setInput('');

    // Add the command to output with current directory
    const prompt = `user@linuxwale:${currentDirectory}$`;
    const newOutput = [...output, `${prompt} ${currentInput}`];

    if (!currentInput) {
      // Empty command
      setOutput(newOutput);
      return;
    }

    const parts = currentInput.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case 'echo':
        // Echo command - print everything after 'echo'
        const echoText = args.join(' ');
        if (echoText) {
          newOutput.push(echoText);
        }
        break;

      case 'cd':
        // CD command - change directory
        const targetDir = args[0];
        if (!targetDir) {
          newOutput.push('cd: missing operand');
          newOutput.push('Try "cd /home" to go to homepage');
        } else if (availableDirectories.includes(targetDir)) {
          // Valid directory - navigate to actual page
          setCurrentDirectory(targetDir);

          if (targetDir === '/home') {
            newOutput.push('Navigating to LinuxWale homepage...');
            setOutput(newOutput);
            setTimeout(() => {
              redirectToHomepage();
            }, 1000);
            return;
          } else if (targetDir === '/about') {
            newOutput.push('Navigating to About page...');
            setOutput(newOutput);
            setTimeout(() => {
              router.push('/about');
            }, 1000);
            return;
          } else if (targetDir === '/services') {
            newOutput.push('Navigating to Services page...');
            setOutput(newOutput);
            setTimeout(() => {
              router.push('/services');
            }, 1000);
            return;
          } else if (targetDir === '/contact') {
            newOutput.push('Navigating to Contact page...');
            setOutput(newOutput);
            setTimeout(() => {
              router.push('/contact');
            }, 1000);
            return;
          } else if (targetDir === '/welcome') {
            newOutput.push('You are already on the welcome page!');
          }
        } else {
          // Directory not found
          newOutput.push(`cd: ${targetDir}: No such file or directory`);
          newOutput.push('Available directories: /home, /about, /services, /contact');
        }
        break;

      case 'help':
        // Help command
        newOutput.push('Available commands:');
        newOutput.push('');
        newOutput.push('echo [text]     - Print text to console');
        newOutput.push('                 Example: echo "hello world"');
        newOutput.push('');
        newOutput.push('cd [directory]  - Change directory/navigate');
        newOutput.push('                 Available: /home, /about, /services, /contact');
        newOutput.push('                 Example: cd /home');
        newOutput.push('');
        newOutput.push('help           - Show this help message');
        newOutput.push('');
        newOutput.push('To get started:');
        newOutput.push('1. Try: echo "hello world"');
        newOutput.push('2. Then: cd /home');
        break;

      case 'ls':
        // Bonus: list directory contents
        newOutput.push('Available directories:');
        availableDirectories.forEach(dir => {
          newOutput.push(`  ${dir}`);
        });
        break;

      case 'pwd':
        // Bonus: print working directory
        newOutput.push(currentDirectory);
        break;

      default:
        // Command not found
        newOutput.push(`${command}: command not found`);
        newOutput.push('Type "help" to see available commands');
        break;
    }

    setOutput(newOutput);
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [input, output, currentDirectory, availableDirectories, redirectToHomepage, router]);

  // Resize functionality
  const handleMouseDown = useCallback((e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = windowSize.width;
    const startHeight = windowSize.height;

    const handleMouseMove = (e: MouseEvent) => {
      let newWidth = startWidth;
      let newHeight = startHeight;

      if (direction.includes('right')) {
        newWidth = Math.max(400, startWidth + (e.clientX - startX));
      }
      if (direction.includes('left')) {
        newWidth = Math.max(400, startWidth - (e.clientX - startX));
      }
      if (direction.includes('bottom')) {
        newHeight = Math.max(200, startHeight + (e.clientY - startY));
      }
      if (direction.includes('top')) {
        newHeight = Math.max(200, startHeight - (e.clientY - startY));
      }

      // Limit maximum width only
      newWidth = Math.min(newWidth, window.innerWidth - 100);
      // No height limit - let users resize as tall as they want

      setWindowSize({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [windowSize]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Prevent scrolling on welcome page
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100vh';

    // Focus input after a short delay
    setTimeout(() => {
      inputRef.current?.focus();

      // For mobile devices, try to trigger keyboard
      if (typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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
      <div
        ref={terminalRef}
        className={`terminal-window ${isResizing ? 'resizing' : ''}`}
        style={{
          width: `${windowSize.width}px`,
          height: `${windowSize.height}px`,
          maxWidth: '800px',
          position: 'relative'
        }}
      >
        {/* Resize handles */}
        <div
          className="resize-handle resize-right"
          onMouseDown={(e) => handleMouseDown(e, 'right')}
        />
        <div
          className="resize-handle resize-bottom"
          onMouseDown={(e) => handleMouseDown(e, 'bottom')}
        />
        <div
          className="resize-handle resize-corner"
          onMouseDown={(e) => handleMouseDown(e, 'right bottom')}
        />

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
            <span className="terminal-prompt">user@linuxwale:{currentDirectory}$</span>
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