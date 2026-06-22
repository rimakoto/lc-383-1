import { useRef, MouseEvent } from 'react';
import { useGameStore } from '../store/gameStore';
import type { ImageSet, Difference } from '../types/game';

interface GameImageProps {
  imageSet: ImageSet;
  side: 'left' | 'right';
}

function getDiffX(diff: Difference, side: 'left' | 'right'): number {
  return side === 'left' ? diff.leftX : diff.rightX;
}

function getDiffY(diff: Difference, side: 'left' | 'right'): number {
  return side === 'left' ? diff.leftY : diff.rightY;
}

export function GameImage({ imageSet, side }: GameImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleImageClick = useGameStore((s) => s.handleImageClick);
  const foundDifferences = useGameStore((s) => s.foundDifferences);
  const wrongClicks = useGameStore((s) => s.wrongClicks);
  const showHint = useGameStore((s) => s.showHint);
  const isCompleted = useGameStore((s) => s.isCompleted);

  const svgContent = side === 'left' ? imageSet.leftSvg : imageSet.rightSvg;
  const sideWrongClicks = wrongClicks.filter((w) => w.side === side);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (isCompleted) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    handleImageClick(x, y, side);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-crosshair select-none
                 border-2 border-white/10 shadow-soft group
                 hover:border-white/20 transition-all duration-300
                 hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.25)]"
    >
      <div
        className="absolute inset-0 w-full h-full"
        dangerouslySetInnerHTML={{
          __html: svgContent.replace(
            /viewBox="0 0 (\d+) (\d+)"/,
            'viewBox="0 0 $1 $2" preserveAspectRatio="xMidYMid slice" class="w-full h-full"'
          ),
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {showHint &&
          imageSet.differences.map((diff) =>
            !foundDifferences.includes(diff.id) ? (
              <circle
                key={`hint-${diff.id}`}
                cx={getDiffX(diff, side)}
                cy={getDiffY(diff, side)}
                r={diff.radius * 0.6}
                fill="rgba(245, 158, 11, 0.18)"
                stroke="rgba(245, 158, 11, 0.5)"
                strokeWidth="0.3"
                className="animate-pulse"
              />
            ) : null
          )}
      </svg>

      {imageSet.differences.map((diff) =>
        foundDifferences.includes(diff.id) ? (
          <div
            key={`found-${diff.id}`}
            className="absolute animate-pop-in"
            style={{
              left: `${getDiffX(diff, side)}%`,
              top: `${getDiffY(diff, side)}%`,
            }}
          >
            <div
              className="absolute border-[3px] border-jade-400 rounded-full animate-pulse-ring"
              style={{
                width: `${diff.radius * 2.2}%`,
                paddingBottom: `${diff.radius * 2.2}%`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
              }}
            />
            <div
              className="absolute border-[3px] border-jade-400 rounded-full shadow-glow-green"
              style={{
                width: `${diff.radius * 2}%`,
                paddingBottom: `${diff.radius * 2}%`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute w-6 h-6 rounded-full bg-jade-500 text-white text-xs font-bold
                         flex items-center justify-center shadow-lg"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {foundDifferences.indexOf(diff.id) + 1}
            </div>
          </div>
        ) : null
      )}

      {sideWrongClicks.map((wc) => (
        <div
          key={wc.id}
          className="absolute animate-flash-red pointer-events-none"
          style={{
            left: `${wc.x}%`,
            top: `${wc.y}%`,
          }}
        >
          <div
            className="absolute w-12 h-12 rounded-full border-4 border-vermilion-500 shadow-glow-red"
            style={{
              left: '50%',
              top: '50%',
            }}
          />
          <div
            className="absolute w-8 h-8 rounded-full bg-vermilion-500/30"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <svg
            className="absolute w-6 h-6 text-vermilion-500"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </div>
      ))}

      <div
        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold
                   bg-black/40 backdrop-blur-sm text-white/90 border border-white/10
                   group-hover:bg-black/50 transition-all"
      >
        {side === 'left' ? '◀ 左图' : '右图 ▶'}
      </div>
    </div>
  );
}
