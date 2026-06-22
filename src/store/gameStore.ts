import { create } from 'zustand';
import type { GameStore, Difference } from '../types/game';
import { imageSets, fisherYatesShuffle } from '../data/imageSets';
import { generateId } from '../utils/format';

function isPointInDifference(
  clickX: number,
  clickY: number,
  diff: Difference
): boolean {
  const dx = clickX - diff.x;
  const dy = clickY - diff.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= diff.radius;
}

export const useGameStore = create<GameStore>((set, get) => ({
  shuffledSets: [],
  currentSetIndex: 0,
  foundDifferences: [],
  wrongClicks: [],
  startTime: null,
  endTime: null,
  elapsed: 0,
  isCompleted: false,
  showHint: false,

  initGame: () => {
    const shuffled = fisherYatesShuffle(imageSets);
    set({
      shuffledSets: shuffled,
      currentSetIndex: 0,
      foundDifferences: [],
      wrongClicks: [],
      startTime: Date.now(),
      endTime: null,
      elapsed: 0,
      isCompleted: false,
      showHint: false,
    });
  },

  handleImageClick: (x: number, y: number) => {
    const state = get();
    if (state.isCompleted) return;

    const currentSet = state.shuffledSets[state.currentSetIndex];
    if (!currentSet) return;

    for (const diff of currentSet.differences) {
      if (state.foundDifferences.includes(diff.id)) continue;

      if (isPointInDifference(x, y, diff)) {
        const newFound = [...state.foundDifferences, diff.id];
        const allFound = newFound.length >= currentSet.differences.length;

        set({
          foundDifferences: newFound,
          isCompleted: allFound,
          endTime: allFound ? Date.now() : null,
        });
        return;
      }
    }

    const wrongClick = {
      id: generateId(),
      x,
      y,
    };
    set({
      wrongClicks: [...state.wrongClicks, wrongClick],
    });

    setTimeout(() => {
      set((s) => ({
        wrongClicks: s.wrongClicks.filter((w) => w.id !== wrongClick.id),
      }));
    }, 600);
  },

  removeWrongClick: (id: string) => {
    set((s) => ({
      wrongClicks: s.wrongClicks.filter((w) => w.id !== id),
    }));
  },

  nextSet: () => {
    const state = get();
    const nextIndex = (state.currentSetIndex + 1) % state.shuffledSets.length;
    set({
      currentSetIndex: nextIndex,
      foundDifferences: [],
      wrongClicks: [],
      startTime: Date.now(),
      endTime: null,
      elapsed: 0,
      isCompleted: false,
      showHint: false,
    });
  },

  restartCurrent: () => {
    set({
      foundDifferences: [],
      wrongClicks: [],
      startTime: Date.now(),
      endTime: null,
      elapsed: 0,
      isCompleted: false,
      showHint: false,
    });
  },

  toggleHint: () => {
    set((s) => ({ showHint: !s.showHint }));
  },

  setElapsed: (ms: number) => {
    set({ elapsed: ms });
  },
}));
