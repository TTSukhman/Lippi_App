import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { challengeOptions, challenges } from "@/db/schema";

import { Card } from "./card";
import MatchChallenge from "./matchchallenge";

type Props = {
  options: typeof challengeOptions.$inferSelect[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
  type: typeof challenges.$inferSelect["type"];
  onMatchComplete?: (matchedPairs: string[]) => void;
};

export const Challenge = ({
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
  type,
  onMatchComplete,
}: Props) => {
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMatchedPairs(new Set());
  }, [options]);

  if (type === "MATCH") {
    const transformedOptions = options.map((option) => ({
      ...option,
      pairId: option.pairId ?? "",
      side: (option.side ?? "left") as "left" | "right",
    }));

    const handlePairMatched = (pairId: string) => {
      setMatchedPairs((prev) => {
        const newSet = new Set(prev);
        newSet.add(pairId);
        if (newSet.size === transformedOptions.length / 2 && onMatchComplete) {
          onMatchComplete(Array.from(newSet));
        }
        return newSet;
      });
    };

    return (
      <MatchChallenge
        options={transformedOptions}
        disabled={disabled}
        onPairMatched={handlePairMatched}
        onMatchComplete={onMatchComplete}
      />
    );
  }

  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" && "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
      )}
    >
      {options.map((option, i) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imageSrc={option.imageSrc}
          shortcut={`${i + 1}`}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          status={status}
          audioSrc={option.audioSrc}
          disabled={disabled}
          type={type}
        />
      ))}
    </div>
  );
};
