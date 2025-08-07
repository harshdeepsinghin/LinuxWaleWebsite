'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


export default function WelcomeTerminal() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [output, setOutput] = useState([
    'Welcome to LinuxWale Terminal v1.0',
    'Initializing Linux community portal...',
    'Connection established. Ready for commands.',
    '',
    'Type "echo namaste world" to continue:'
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
    // Focus input after a short delay
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

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

  const processCommand = () => {
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
  };

  const redirectToHomepage = () => {
    // Mark as completed welcome
    localStorage.setItem('linuxwale_welcome_completed', 'true');
    localStorage.setItem('linuxwale_last_visit', Date.now().toString());

    // Redirect to homepage
    router.push('/');
  };

  return (
    <div className="terminal-container">
      {/* Logo Image */}
      <div className="welcome-logo">
        <img src="/images/LW_W_on_B.webp" alt="LinuxWale Logo" className="logo-image" style={{ width: '100px', height: '100px' }} />
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
        <span className="skip-icon">🚀</span>
        <span className="skip-text">I'm too lazy for Linux commands!</span>
        <span className="skip-subtext">Just take me to the site →</span>
      </button>
    </div>
  );
}