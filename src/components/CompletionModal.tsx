import { useEffect, useState } from 'react';
import { Trophy, Clock, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { formatElapsed } from '../utils/format';

export function CompletionModal() {
  const isCompleted = useGameStore((s) => s.isCompleted);
  const elapsed = useGameStore((s) => s.elapsed);
  const foundDifferences = useGameStore((s) => s.foundDifferences);
  const nextSet = useGameStore((s) => s.nextSet);
  const restartCurrent = useGameStore((s) => s.restartCurrent);
  const currentSet = useGameStore((s) => s.shuffledSets[s.currentSetIndex]);
  const totalSets = useGameStore((s) => s.shuffledSets.length);
  const currentSetIndex = useGameStore((s) => s.currentSetIndex);

  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      const t1 = setTimeout(() => setVisible(true), 400);
      const t2 = setTimeout(() => setShowContent(true), 700);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setVisible(false);
      setShowContent(false);
    }
  }, [isCompleted]);

  if (!visible) return null;

  const grade =
    elapsed < 15000
      ? { label: '神之眼力', color: 'text-amber-400', emoji: '👑' }
      : elapsed < 30000
        ? { label: '火眼金睛', color: 'text-jade-400', emoji: '🌟' }
        : elapsed < 60000
          ? { label: '观察入微', color: 'text-sky-400', emoji: '✨' }
          : { label: '眼力不错', color: 'text-purple-400', emoji: '👍' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink-900/70 backdrop-blur-md"
        style={{ animation: 'fadeIn 0.4s ease-out' }}
      />

      <div
        className={`relative glass-card w-full max-w-md overflow-hidden
                    transition-all duration-700 ease-out ${
                      showContent
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-jade-500/30 via-amber-400/30 to-vermilion-500/30 blur-2xl animate-pulse" />
        </div>

        {Array.from({ length: 18 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute w-4 h-4 text-amber-400 animate-float"
            style={{
              left: `${5 + (i * 53) % 90}%`,
              top: `${5 + (i * 37) % 85}%`,
              animationDelay: `${i * 0.15}s`,
              opacity: 0.4 + (i % 4) * 0.15,
            }}
          />
        ))}

        <div className="relative p-6 sm:p-8 text-center">
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/30 to-jade-500/30 blur-xl animate-pulse" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-glow-amber">
              <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-ink-900" />
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
            全部找到!
          </h2>

          <p className="text-slate-400 text-sm mb-6">
            关卡 {currentSetIndex + 1} / {totalSets} · {currentSet?.title ?? ''}
          </p>

          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full
                        border border-white/10 bg-white/5 mb-5 ${grade.color}`}
            style={{
              transition: 'all 0.5s ease-out',
              transitionDelay: '200ms',
            }}
          >
            <span className="text-2xl">{grade.emoji}</span>
            <span className="font-bold text-lg">{grade.label}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <Clock className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                {formatElapsed(elapsed)}
              </div>
              <div className="text-xs text-slate-400 mt-1">总用时</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <TargetIcon />
              <div className="text-2xl font-bold text-jade-400 tabular-nums">
                {foundDifferences.length} / 5
              </div>
              <div className="text-xs text-slate-400 mt-1">找到差异</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={restartCurrent}
              className="flex-1 btn-secondary order-2 sm:order-1"
            >
              <RotateCcw className="w-4 h-4" />
              重玩本关
            </button>
            <button onClick={nextSet} className="flex-1 btn-primary order-1 sm:order-2">
              下一关
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function TargetIcon() {
  return (
    <svg
      className="w-5 h-5 text-jade-400 mx-auto mb-2"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
