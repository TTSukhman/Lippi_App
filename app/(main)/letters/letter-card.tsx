"use client";

import { useAudio } from "react-use";
import Image from "next/image";
import { Letter } from "./data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MIMEParams } from "util";

interface Props {
  letter: Letter;
}

export const LetterCard = ({ letter }: Props) => {
  const [audio, state, controls] = useAudio({
    src: letter.audio,
    autoPlay: false,
  });

  const groupColor = {
    vowel: "bg-yellow-200 hover:bg-yellow-300",
    consonant: "bg-sky-200 hover:bg-sky-300",
    sonorants: "bg-blue-200 hover:bg-blue-300",
    nasal: "bg-purple-200 hover:bg-purple-300",
    fricative: "bg-green-200 hover:bg-green-300",
    number: "bg-gray-200 hover:bg-gray-300",
    numberL: "bg-gray-200 hover:bg-gray-300",
    extended: "bg-rose-200 hover:bg-rose-300",
    matra: "bg-pink-200 hover:bg-pink-300",
    diacritics: "bg-pink-200 hover:bg-pink-300",
    subscript: "bg-pink-200 hover:bg-pink-300",
  }[letter.group];
 
  return (
    <div onClick={controls.play} className="relative">
      {audio}
      <Button
        variant="ghost"
        className={cn(
          "w-full h-full aspect-video p-1 flex flex-col items-center justify-center",
          groupColor
        )}
      >

        <div className="relative w-10 h-10 mb-1 flex items-center justify-center">
          {(letter.group === "subscript" || letter.group === "number" || letter.group === "numberL") ? (
            <span className="text-neutral-700 text-[16px] sm:text-[15px] lg:text-[25px] leading-none">
              {letter.symbol}
            </span>
          ) : (
            <Image
              src={letter.image}
              alt={letter.name}
              height={60}
              width={60}
              className="object-contain"
            />
          )}
        </div>


        <span className="text-s font-bold">{letter.name}</span>
      </Button>
    </div>
  );
};