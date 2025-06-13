import React, { useRef, useEffect } from 'react';

const SQUARES = 20;
const SPEED = 0.5;
const SIZE = 32;
const GAP = 8;
const COLOR = 'rgba(255,255,255,0.04)';

const SquaresBackground: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      for (let y = 0; y < height; y += SIZE + GAP) {
        for (let x = 0; x < width; x += SIZE + GAP) {
          ctx.save();
          ctx.translate(x, y + (offset % (SIZE + GAP)));
          ctx.fillStyle = COLOR;
          ctx.fillRect(0, 0, SIZE, SIZE);
          ctx.restore();
        }
      }
      offset += SPEED;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Volledige breedte/hoogte, absolute positioning
  return (
    <canvas
      ref={ref}
      width={1920}
      height={1080}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
};

export default SquaresBackground; 