'use client';

import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | undefined>(undefined);

    const initializeMatrix = () => {
        const canvas = canvasRef.current;
        if (!canvas) return () => { }; // Return empty cleanup function

        const ctx = canvas.getContext('2d');
        if (!ctx) return () => { }; // Return empty cleanup function

        // Professional Matrix character sets - organized by script
        const latinChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const hindiChars = 'अआइईउऊएऐओऔकखगघचछजझटठडढतथदधनपफबभमयरलवशषसह';
        const urduChars = 'اآبپتٹثجچحخدڈذرڑزژسشصضطظعغفقکگلمنوہیے';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        // Combine all character sets for diversity
        const allChars = latinChars + hindiChars + urduChars + symbolChars;
        const charArray = allChars.split('');

        // Professional settings for full rain effect
        const fontSize = 16;
        let columns = Math.floor(window.innerWidth / fontSize); // Use window width for full coverage
        const drops: number[] = [];
        const speeds: number[] = [];
        const brightness: number[] = [];

        // Initialize each column with random properties for full rain effect
        for (let x = 0; x < columns; x++) {
            drops[x] = Math.floor(Math.random() * -100); // Start above screen at different heights
            speeds[x] = Math.random() * 0.8 + 0.3; // Variable speed (0.3-1.1)
            brightness[x] = Math.random() * 0.7 + 0.3; // Variable brightness (0.3-1.0)
        }

        // Set canvas size with device pixel ratio for crisp rendering
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;

            // Use window dimensions for full screen coverage
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            ctx.scale(dpr, dpr);
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';

            // Recalculate columns after resize
            const newColumns = Math.floor(window.innerWidth / fontSize);
            if (newColumns !== columns) {
                // Reinitialize drops array for new column count
                for (let x = drops.length; x < newColumns; x++) {
                    drops[x] = Math.floor(Math.random() * -100);
                    speeds[x] = Math.random() * 0.8 + 0.3;
                    brightness[x] = Math.random() * 0.7 + 0.3;
                }
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let lastTime = 0;
        const targetFPS = 30; // Professional 30 FPS for smooth performance
        const frameInterval = 1000 / targetFPS;

        const draw: FrameRequestCallback = (currentTime: number) => {
            if (currentTime - lastTime < frameInterval) {
                animationRef.current = requestAnimationFrame(draw);
                return;
            }
            lastTime = currentTime;

            // Professional fade effect for trails
            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

            // Enhanced font rendering
            ctx.textBaseline = 'top';
            ctx.textAlign = 'left';

            // Update columns count in case of resize
            const currentColumns = Math.floor(window.innerWidth / fontSize);

            for (let i = 0; i < currentColumns && i < drops.length; i++) {
                // Dynamic character selection
                const text = charArray[Math.floor(Math.random() * charArray.length)];

                // Professional gradient effect - brighter at the head
                const alpha = brightness[i] * (1 - (drops[i] % 10) / 10);
                const greenIntensity = Math.floor(255 * alpha);

                // Create gradient effect with multiple shades
                if (drops[i] % 10 === 0) {
                    // Head of the trail - brightest
                    ctx.fillStyle = `rgb(${Math.floor(greenIntensity * 0.8)}, 255, ${Math.floor(greenIntensity * 0.8)})`;
                } else if (drops[i] % 10 < 3) {
                    // Near head - bright green
                    ctx.fillStyle = `rgb(0, ${greenIntensity}, 0)`;
                } else {
                    // Trail - dimmer green
                    ctx.fillStyle = `rgb(0, ${Math.floor(greenIntensity * 0.6)}, 0)`;
                }

                // Professional font with better readability
                ctx.font = `${fontSize}px 'Fira Code', 'Courier New', monospace`;
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Continuous falling motion - always moving
                drops[i] += speeds[i];

                // Reset drop when it goes off screen
                if (drops[i] * fontSize > window.innerHeight + 50) {
                    drops[i] = -Math.floor(Math.random() * 50) - 10; // Start well above screen
                    speeds[i] = Math.random() * 0.8 + 0.3; // New random speed
                    brightness[i] = Math.random() * 0.7 + 0.3; // New brightness
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        // Start professional animation loop
        animationRef.current = requestAnimationFrame(draw);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
        };
    };

    useEffect(() => {
        // Only run on client side with proper cleanup
        if (typeof window === 'undefined') return () => { }; // Return empty cleanup function

        return initializeMatrix();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="matrix-background-professional"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -10,
                pointerEvents: 'none',
                opacity: 0.6,
                background: 'transparent',
                imageRendering: 'pixelated', // Crisp character rendering
            }}
            aria-hidden="true"
            role="presentation"
        />
    );
}