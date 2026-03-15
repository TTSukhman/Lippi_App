// app/letters/page.tsx

import { LETTERS } from "./data";
import { LettersGrid } from "./grid";
import Footer from "./footer";


const LettersPage = () => {
  const alphabet = LETTERS.filter((l) =>
    ["vowel", "consonant", "nasal", "fricative","sonorants",].includes(l.group)
  );

  const extended = LETTERS.filter((l) => l.group === "extended");
  const matras = LETTERS.filter((l) => l.group === "matra");
  const diacritics = LETTERS.filter((l) => l.group === "diacritics");
  const subscript = LETTERS.filter((l) => l.group === "subscript");
  const numbers = LETTERS.filter((l) => l.group === "number");
  const numbersL = LETTERS.filter((l) => l.group === "numberL");

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto py-6">
      <h1 className="text-2xl font-bold text-neutral-800 text-center mb-6">
        Punjabi
      </h1>
      <LettersGrid title="Letters" letters={alphabet} columns={5} fixedRows={8}/>

      <LettersGrid title="" letters={extended} columns={3} fixedRows={2} wide={true}/>

      <LettersGrid title="Matras" letters={matras} columns={5}/>

      <LettersGrid title="Diacritics" letters={diacritics} columns={5}/>
      
      <LettersGrid title="Subscript" letters={subscript} columns={5}/>

      <LettersGrid title="Numbers" letters={numbers} columns={5}/>

      <LettersGrid title="Multiples of 10" letters={numbersL} columns={5}/>
      <Footer />
    </div>
  );
};

export default LettersPage;
