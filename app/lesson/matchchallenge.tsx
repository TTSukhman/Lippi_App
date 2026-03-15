'use client';

import { useEffect, useState } from 'react';

type Option = {
  id: string | number;
  text: string;
  pairId: string;
  side: 'left' | 'right';
};

type MatchChallengeProps = {
  options: Option[];
  disabled?: boolean;
  onPairMatched?: (pairId: string) => void;
  onMatchComplete?: (matchedPairs: string[]) => void;
};

export default function MatchChallenge({
  options,
  disabled = false,
  onPairMatched,
  onMatchComplete,
}: MatchChallengeProps) {
  const leftOptions = options.filter((option) => option.side === 'left');
  const rightOptions = options.filter((option) => option.side === 'right');

  const [selectedLeft, setSelectedLeft] = useState<Option | null>(null);
  const [selectedRight, setSelectedRight] = useState<Option | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [wrongMatch, setWrongMatch] = useState(false);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const isMatch = selectedLeft.pairId === selectedRight.pairId;

      if (isMatch) {
        setMatchedPairs((prev) => {
          const newSet = new Set(prev);
          newSet.add(selectedLeft.pairId);
          onPairMatched?.(selectedLeft.pairId);
          onMatchComplete?.([...newSet]);
          return newSet;
        });
        setWrongMatch(false);
      } else {
        setWrongMatch(true);
      }

      // Reset after short delay
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongMatch(false);
      }, 800);
    }
  }, [selectedLeft, selectedRight]);

  const isMatched = (pairId: string) => matchedPairs.has(pairId);

  const getButtonClass = (option: Option, isLeft: boolean) => {
    const isSelected =
      (isLeft && selectedLeft?.id === option.id) ||
      (!isLeft && selectedRight?.id === option.id);

    if (isMatched(option.pairId)) return 'bg-gray-300 cursor-not-allowed';
    if (isSelected) return 'bg-blue-200';
    if (wrongMatch && isSelected) return 'bg-red-200';

    return 'bg-white hover:bg-sky-100';
  };

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
      {/* Left Column */}
      <div className="flex flex-col gap-3">
        {leftOptions.map((option) => (
          <button
            key={`left-${option.id}`}
            disabled={disabled || isMatched(option.pairId)}
            className={`border p-2 rounded ${getButtonClass(option, true)}`}
            onClick={() =>
              !disabled &&
              !isMatched(option.pairId) &&
              setSelectedLeft(option)
            }
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-3">
        {rightOptions.map((option) => (
          <button
            key={`right-${option.id}`}
            disabled={disabled || isMatched(option.pairId)}
            className={`border p-2 rounded ${getButtonClass(option, false)}`}
            onClick={() =>
              !disabled &&
              !isMatched(option.pairId) &&
              setSelectedRight(option)
            }
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
