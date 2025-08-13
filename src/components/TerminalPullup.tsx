'use client';

import { useRouter } from 'next/navigation';

export default function TerminalPullup() {
  const router = useRouter();

  const openWelcomeTerminal = () => {
    router.push('/welcome');
  };

  return (
    <div 
      className="terminal-pullup-button"
      onClick={openWelcomeTerminal}
      title="Open LinuxWale Terminal"
    >
      <span className="terminal-symbol">&gt;_</span>
    </div>
  );
}