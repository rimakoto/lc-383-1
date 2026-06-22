import { Timer, Target, Lightbulb, LightbulbOff } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { formatElapsed } from '../utils/format';
import { useTimer } from '../hooks/useTimer';

export function StatusBar() {
  useTimer();

  const elapsed = useGameStore((s) => s.elapsed);
  const foundDifferences = useGameStore((s) => s.foundDifferences);
  const currentSet = useGameStore(
    (s) => s.shuffledSets[s.currentSetIndex]
  );
  const showHint = useGameStore((s) => s.showHint);
  const toggleHint = useGameStore((s) => s.toggleHint);
  const isCompleted = useGameStore((s) => s.isCompleted);

  const total = currentSet?.differences.length ?? 5;
  const found = foundDifferences.length;
  const progress = (found / total) * 100;

  return (
    <div className="glass-card px-4 py-3 sm:px-6 sm:py-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
      <div className="stat-badge gap-2.5">
        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-jade-400 shrink-0" />
        <div className="flex items-baseline gap-1">
          <span className="text-lg sm:text-2xl font-bold text-jade-400 tabular-nums">
            {found}
          </span>
          <span className="text-slate-400">/</span>
          <span className="text-sm sm:text-base text-slate-300 tabular-nums">{total}</span>
        </div>
        <div className="hidden sm:block w-28 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-jade-500 to-jade-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        className={`stat-badge gap-2.5 ${
          isCompleted ? 'shadow-glow-amber border-amber-400/40' : ''
        }`}
      >
        <Timer
          className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${
            isCompleted ? 'text-amber-400' : 'text-amber-400/80'
          }`}
        />
        <span
          className={`text-lg sm:text-2xl font-bold font-mono tabular-nums tracking-wider ${
            isCompleted ? 'text-amber-400' : 'text-amber-400/90'
          }`}
        >
          {formatElapsed(elapsed)}
        </span>
      </div>

      <button
        onClick={toggleHint}
        disabled={isCompleted || found >= total}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed ${
                      showHint
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-400/40 shadow-glow-amber'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-400/30'
                    }`}
        title={showHint ? '关闭提示' : '显示提示'}
      >
        {showHint ? (
          <>
            <LightbulbOff className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">关闭提示</span>
          </>
        ) : (
          <>
            <Lightbulb className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">显示提示</span>
          </>
        )}
      </button>
    </div>
  );
}
