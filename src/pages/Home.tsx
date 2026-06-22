import { useEffect } from 'react';
import { Shuffle, RotateCcw, Eye } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { GameImage } from '../components/GameImage';
import { StatusBar } from '../components/StatusBar';
import { CompletionModal } from '../components/CompletionModal';

export default function Home() {
  const initGame = useGameStore((s) => s.initGame);
  const shuffledSets = useGameStore((s) => s.shuffledSets);
  const currentSetIndex = useGameStore((s) => s.currentSetIndex);
  const nextSet = useGameStore((s) => s.nextSet);
  const restartCurrent = useGameStore((s) => s.restartCurrent);
  const isCompleted = useGameStore((s) => s.isCompleted);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const currentSet = shuffledSets[currentSetIndex];

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs mb-4">
            <Eye className="w-3.5 h-3.5" />
            眼力挑战 · 观察力测试
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-3">
            <span className="gradient-text">找 茬 大 作 战</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            左右两张图看似相同，实则暗藏 <span className="text-jade-400 font-bold">5 处差异</span>。
            火眼金睛的你，能在多久内全部找出？
          </p>
        </header>

        <div className="mb-5 sm:mb-6 flex justify-center">
          <StatusBar />
        </div>

        {currentSet && (
          <div className="mb-6">
            <div className="flex items-center justify-center gap-3 mb-4 text-sm text-slate-400">
              <span className="stat-badge gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                第 {currentSetIndex + 1} / {shuffledSets.length} 关
              </span>
              <span className="font-display text-lg text-white/90 font-bold tracking-wide">
                — {currentSet.title} —
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
              <GameImage imageSet={currentSet} side="left" />

              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="absolute w-px h-48 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                  <div className="w-12 h-12 rounded-full bg-ink-800/80 backdrop-blur border border-white/15 flex items-center justify-center z-10 relative">
                    <div className="w-6 h-6 rounded-full border-2 border-amber-400/80 flex items-center justify-center">
                      <span className="text-amber-400 text-xs font-bold">VS</span>
                    </div>
                  </div>
                </div>
              </div>

              <GameImage imageSet={currentSet} side="right" />
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            onClick={restartCurrent}
            disabled={isCompleted}
            className="btn-secondary disabled:opacity-40"
          >
            <RotateCcw className="w-4 h-4" />
            重新开始
          </button>
          <button
            onClick={() => {
              initGame();
            }}
            className="btn-accent"
          >
            <Shuffle className="w-4 h-4" />
            全部重新洗牌
          </button>
          <button
            onClick={nextSet}
            className="btn-primary"
          >
            跳过本关
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 4l10 8-10 8V4z M19 5v14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-10 sm:mt-14 max-w-2xl mx-auto">
          <div className="glass-card p-4 sm:p-5">
            <h3 className="font-display text-lg font-bold text-white/90 mb-3 flex items-center gap-2">
              <span className="text-amber-400">🎮</span> 游戏玩法
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-jade-400 mt-0.5 shrink-0">✓</span>
                <span>在左图或右图上点击你认为不同的地方</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jade-400 mt-0.5 shrink-0">✓</span>
                <span>找对了会 <span className="text-jade-400 font-semibold">绿色圆圈</span> 标记并编号</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vermilion-400 mt-0.5 shrink-0">✓</span>
                <span>找错了会 <span className="text-vermilion-400 font-semibold">红色闪烁</span> 短暂提示</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5 shrink-0">✓</span>
                <span>找齐 5 处后显示用时，可切换下一关</span>
              </li>
              <li className="flex items-start gap-2 sm:col-span-2">
                <span className="text-sky-400 mt-0.5 shrink-0">💡</span>
                <span>
                  遇到困难可以使用「<span className="text-amber-400 font-semibold">显示提示</span>」功能，
                  未找到的差异会有黄色光晕
                </span>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-slate-500 pb-6">
          用 ♥ 和 React 打造 · 共 {shuffledSets.length} 组图片随机挑战
        </footer>
      </div>

      <CompletionModal />
    </div>
  );
}
