// app/letters/grid.tsx

import { Letter } from "./data";
import { LetterCard } from "./letter-card";

type Props = {
  title: string;
  letters: (Letter | null)[];
  columns: number;
  fixedRows?: number;
  wide?: boolean;
};

export const LettersGrid = ({
  title,
  letters,
  columns,
  fixedRows,
  wide = false,
}: Props) => {
  let displayLetters = [...letters];

  // Pad grid if fixed row count is specified
  if (fixedRows) {
    const totalSlots = fixedRows * columns;
    const missing = totalSlots - displayLetters.length;
    if (missing > 0) {
      displayLetters = [...displayLetters, ...Array(missing).fill(null)];
    }
  }

  // Split into rows
  const rows: (Letter | null)[][] = [];
  for (let i = 0; i < displayLetters.length; i += columns) {
    rows.push(displayLetters.slice(i, i + columns));
  }

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold text-neutral-700 mb-4">{title}</h2>
      <div className="space-y-3">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-3"
            style={{
              gridTemplateColumns: `repeat(${columns}, ${
                wide ? "minmax(0, 1fr)" : "minmax(0, 1fr)"
              })`,
            }}
          >
            {row.map((letter, idx) =>
              letter ? (
                <LetterCard key={idx} letter={letter} />
              ) : (
                <div key={idx} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
