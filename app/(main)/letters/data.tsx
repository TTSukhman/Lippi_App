// app/letters/data.tsx

export type LetterGroup =
  | "vowel"
  | "consonant"
  | "nasal"
  | "fricative"
  | "matra"
  | "number"
  | "numberL"
  | "sonorants"
  | "diacritics"
  | "subscript"
  | "extended";

export type Letter = {
  symbol: string;
  name: string;
  audio: string;
  image: string;
  group: LetterGroup;
};

export const LETTERS: Letter[] = [
  // Vowels (alphabetical)
  { symbol: "ੳ", name: "ūṛā", image: "/images/Gurmukhi_ੳ.svg", audio: "/audio/ੳ.mp3", group: "vowel" },
  { symbol: "ਅ", name: "aiṛā", image: "/images/Gurmukhi_ਅ.svg", audio: "/audio/ਅ.mp3", group: "vowel" },
  { symbol: "ੲ", name: "īṛī", image: "/images/Gurmukhi_ੲ.svg", audio: "/audio/ੲ.mp3", group: "vowel" },

  // Fricatives
  { symbol: "ਸ", name: "sassā", image: "/images/Gurmukhi_ਸ.svg", audio: "/audio/ਸ.mp3", group: "fricative" },
  { symbol: "ਹ", name: "hāhā", image: "/images/Gurmukhi_ਹ.svg", audio: "/audio/ਹ.mp3", group: "fricative" },

  // K-line
  { symbol: "ਕ", name: "kakkā", image: "/images/Gurmukhi_ਕ.svg", audio: "/audio/ਕ.mp3", group: "consonant" },
  { symbol: "ਖ", name: "khakkhā", image: "/images/Gurmukhi_ਖ.svg", audio: "/audio/ਖ.mp3", group: "consonant" },
  { symbol: "ਗ", name: "gaggā", image: "/images/Gurmukhi_ਗ.svg", audio: "/audio/ਗ.mp3", group: "consonant" },
  { symbol: "ਘ", name: "ghaggā", image: "/images/Gurmukhi_ਘ.svg", audio: "/audio/ਘ.mp3", group: "consonant" },
  { symbol: "ਙ", name: "nganga", image: "/images/Gurmukhi_ਙ.svg", audio: "/audio/ਙ.mp3", group: "nasal" },

  // Ch-line
  { symbol: "ਚ", name: "chicha", image: "/images/Gurmukhi_ਚ.svg", audio: "/audio/ਚ.mp3", group: "consonant" },
  { symbol: "ਛ", name: "chhichha", image: "/images/Gurmukhi_ਛ.svg", audio: "/audio/ਛ.mp3", group: "consonant" },
  { symbol: "ਜ", name: "jijja", image: "/images/Gurmukhi_ਜ.svg", audio: "/audio/ਜ.mp3", group: "consonant" },
  { symbol: "ਝ", name: "jhijja", image: "/images/Gurmukhi_ਝ.svg", audio: "/audio/ਝ.mp3", group: "consonant" },
  { symbol: "ਞ", name: "nyanya", image: "/images/Gurmukhi_ਞ.svg", audio: "/audio/ਞ.mp3", group: "nasal" },

  // T-line
  { symbol: "ਟ", name: "ṭaiṅkā", image: "/images/Gurmukhi_ਟ.svg", audio: "/audio/ਟ.mp3", group: "consonant" },
  { symbol: "ਠ", name: "ṭhaṭṭhā", image: "/images/Gurmukhi_ਠ.svg", audio: "/audio/ਠ.mp3", group: "consonant" },
  { symbol: "ਡ", name: "ḍaḍḍā", image: "/images/Gurmukhi_ਡ.svg", audio: "/audio/ਡ.mp3", group: "consonant" },
  { symbol: "ਢ", name: "ḍhaḍḍā", image: "/images/Gurmukhi_ਢ.svg", audio: "/audio/ਢ.mp3", group: "consonant" },
  { symbol: "ਣ", name: "naana", image: "/images/Gurmukhi_ਣ.svg", audio: "/audio/ਣ.mp3", group: "nasal" },

  // t-line
  { symbol: "ਤ", name: "tattā", image: "/images/Gurmukhi_ਤ.svg", audio: "/audio/ਤ.mp3", group: "consonant" },
  { symbol: "ਥ", name: "thatthā", image: "/images/Gurmukhi_ਥ.svg", audio: "/audio/ਥ.mp3", group: "consonant" },
  { symbol: "ਦ", name: "daddā", image: "/images/Gurmukhi_ਦ.svg", audio: "/audio/ਦ.mp3", group: "consonant" },
  { symbol: "ਧ", name: "dhaddā", image: "/images/Gurmukhi_ਧ.svg", audio: "/audio/ਧ.mp3", group: "consonant" },
  { symbol: "ਨ", name: "nannā", image: "/images/Gurmukhi_ਨ.svg", audio: "/audio/ਨ.mp3", group: "nasal" },

  // P-line
  { symbol: "ਪ", name: "pappā", image: "/images/Gurmukhi_ਪ.svg", audio: "/audio/ਪ.mp3", group: "consonant" },
  { symbol: "ਫ", name: "phapphā", image: "/images/Gurmukhi_ਫ.svg", audio: "/audio/ਫ.mp3", group: "consonant" },
  { symbol: "ਬ", name: "babbā", image: "/images/Gurmukhi_ਬ.svg", audio: "/audio/ਬ.mp3", group: "consonant" },
  { symbol: "ਭ", name: "bhabbā", image: "/images/Gurmukhi_ਭ.svg", audio: "/audio/ਭ.mp3", group: "consonant" },
  { symbol: "ਮ", name: "mammā", image: "/images/Gurmukhi_ਮ.svg", audio: "/audio/ਮ.mp3", group: "nasal" },

  // Y-line
  { symbol: "ਯ", name: "yayyā", image: "/images/Gurmukhi_ਯ.svg", audio: "/audio/ਯ.mp3", group: "sonorants" },
  { symbol: "ਰ", name: "rārā", image: "/images/Gurmukhi_ਰ.svg", audio: "/audio/ਰ.mp3", group: "sonorants" },
  { symbol: "ਲ", name: "lallā", image: "/images/Gurmukhi_ਲ.svg", audio: "/audio/ਲ.mp3", group: "sonorants" },
  { symbol: "ਵ", name: "vāvā", image: "/images/Gurmukhi_ਵ.svg", audio: "/audio/ਵ.mp3", group: "sonorants" },
  { symbol: "ੜ", name: "ṛāṛā", image: "/images/Gurmukhi_ੜ.svg", audio: "/audio/ੜ.mp3", group: "sonorants" },

  // Last-line
  { symbol: "ਸ਼", name: "sassē pairĭ bindī", image: "/images/Gurmukhi_ਸ਼.svg", audio: "/audio/ਸ਼.mp3", group: "extended" },
  { symbol: "ਖ਼", name: "khakkhē pairĭ bindī", image: "/images/Gurmukhi_ਖ਼.svg", audio: "/audio/ਖ਼.mp3", group: "extended" },
  { symbol: "ਗ਼", name: "gaggē pairĭ bindī", image: "/images/Gurmukhi_ਗ਼.svg", audio: "/audio/ਗ਼.mp3", group: "extended" },
  { symbol: "ਜ਼", name: "jajjē pairĭ bindī", image: "/images/Gurmukhi_ਜ਼.svg", audio: "/audio/ਜ਼.mp3", group: "extended" },
  { symbol: "ਫ਼", name: "phapphē pairĭ bindī", image: "/images/Gurmukhi_ਫ਼.svg", audio: "/audio/ਫ਼.mp3", group: "extended" },
  { symbol: "ਲ਼", name: "lallē pairĭ bindī", image: "/images/Gurmukhi_ਲ਼.svg", audio: "/audio/ਲ਼.mp3", group: "extended" },

  // Matras (sample – feel free to extend)
  { symbol: "ਾ", name: "kanna", image: "/images/Gurmukhi_ਾ.svg", audio: "/audio/ਾ.mp3", group: "matra" },
  { symbol: "ਿ", name: "sihari", image: "/images/Gurmukhi_ਿ.svg", audio: "/audio/ਿ.mp3", group: "matra" },
  { symbol: "ੀ", name: "bihari", image: "/images/Gurmukhi_ੀ.svg", audio: "/audio/ੀ.mp3", group: "matra" },
  { symbol: "ੁ", name: "onkar", image: "/images/Gurmukhi_ੁ.svg", audio: "/audio/ੁ.mp3", group: "matra" },
  { symbol: "ੂ", name: "dulankar", image: "/images/Gurmukhi_ੂ.svg", audio: "/audio/ੂ.mp3", group: "matra" },
  { symbol: "ੇ", name: "lanv", image: "/images/Gurmukhi_ੇ.svg", audio: "/audio/ੇ.mp3", group: "matra" },
  { symbol: "ੈ", name: "dulaiv", image: "/images/Gurmukhi_ੈ.svg", audio: "/audio/ੈ.mp3", group: "matra" },
  { symbol: "ੋ", name: "hora", image: "/images/Gurmukhi_ੋ.svg", audio: "/audio/ੋ.mp3", group: "matra" },
  { symbol: "ੌ", name: "kanora", image: "/images/Gurmukhi_ੌ.svg", audio: "/audio/ੌ.mp3", group: "matra" },
  
  // Diacritics (sample – feel free to extend)
  { symbol: "ਂ", name: "bindi", image: "/images/Gurmukhi_ਂ.svg", audio: "/audio/ਂ.mp3", group: "diacritics" },
  { symbol: "ੰ", name: "tippt", image: "/images/Gurmukhi_ੰ.svg", audio: "/audio/ੰ.mp3", group: "diacritics" },
  { symbol: "ੱ", name: "ad-ak", image: "/images/Gurmukhi_ੱ.svg", audio: "/audio/ੱ.mp3", group: "diacritics" },
  
  // Diacritics (sample – feel free to extend)
  { symbol: "◌੍", name: "halant", image: "/images/Gurmukhi_◌੍.svg", audio: "/audio/ੱ.mp3", group: "subscript" },
  { symbol: "੍ਰ", name: "pairi rara", image: "/images/Gurmukhi_◌੍.svg", audio: "/audio/ੱ.mp3", group: "subscript" },
  { symbol: "੍ਵ", name: "pairi vava", image: "/images/Gurmukhi_◌੍.svg", audio: "/audio/ੱ.mp3", group: "subscript" },
  { symbol: "੍ਹ", name: "pairi haha", image: "/images/Gurmukhi_◌੍.svg", audio: "/audio/ੱ.mp3", group: "subscript" },
  { symbol: "◌ੵ", name: "pairi yaiya", image: "/images/Gurmukhi_◌੍.svg", audio: "/audio/ੱ.mp3", group: "subscript" },
  

  // Numbers (੦–੯)
  { symbol: "੦", name: "sifr", image: "/images/Gurmukhi_੦.svg", audio: "/audio/੦.mp3", group: "number" },
  { symbol: "੧", name: "ek", image: "/images/Gurmukhi_੧.svg", audio: "/audio/੧.mp3", group: "number" },
  { symbol: "੨", name: "do", image: "/images/Gurmukhi_੨.svg", audio: "/audio/੨.mp3", group: "number" },
  { symbol: "੩", name: "tin", image: "/images/Gurmukhi_੩.svg", audio: "/audio/੩.mp3", group: "number" },
  { symbol: "੪", name: "char", image: "/images/Gurmukhi_੪.svg", audio: "/audio/੪.mp3", group: "number" },
  { symbol: "੫", name: "panj", image: "/images/Gurmukhi_੫.svg", audio: "/audio/੫.mp3", group: "number" },
  { symbol: "੬", name: "shay", image: "/images/Gurmukhi_੬.svg", audio: "/audio/੬.mp3", group: "number" },
  { symbol: "੭", name: "sat", image: "/images/Gurmukhi_੭.svg", audio: "/audio/੭.mp3", group: "number" },
  { symbol: "੮", name: "ath", image: "/images/Gurmukhi_੮.svg", audio: "/audio/੮.mp3", group: "number" },
  { symbol: "੯", name: "nau", image: "/images/Gurmukhi_੯.svg", audio: "/audio/੯.mp3", group: "number" },

  { symbol: "੧੦", name: "das", image: "/images/Gurmukhi_੧੦.svg", audio: "/audio/੧੦.mp3", group: "number" },
  { symbol: "੧੧", name: "gearan", image: "/images/Gurmukhi_੧੧.svg", audio: "/audio/੧੧.mp3", group: "number" },
  { symbol: "੧੨", name: "baran", image: "/images/Gurmukhi_੧੨.svg", audio: "/audio/੧੨.mp3", group: "number" },
  { symbol: "੧੩", name: "teran", image: "/images/Gurmukhi_੧੩.svg", audio: "/audio/੧੩.mp3", group: "number" },
  { symbol: "੧੪", name: "chaudan", image: "/images/Gurmukhi_੧੪.svg", audio: "/audio/੧੪.mp3", group: "number" },
  { symbol: "੧੫", name: "pandran", image: "/images/Gurmukhi_੧੫.svg", audio: "/audio/੧੫.mp3", group: "number" },
  { symbol: "੧੬", name: "solan", image: "/images/Gurmukhi_੧੬.svg", audio: "/audio/੧੬.mp3", group: "number" },
  { symbol: "੧੭", name: "sataran", image: "/images/Gurmukhi_੧੭.svg", audio: "/audio/੧੭.mp3", group: "number" },
  { symbol: "੧੮", name: "atharan", image: "/images/Gurmukhi_੧੮.svg", audio: "/audio/੧੮.mp3", group: "number" },
  { symbol: "੧੯", name: "unni", image: "/images/Gurmukhi_੧੯.svg", audio: "/audio/੧੯.mp3", group: "number" },

  { symbol: "੨੦", name: "veeh", image: "/images/Gurmukhi_੨੦.svg", audio: "/audio/੨੦.mp3", group: "number" },
  { symbol: "੨੧", name: "ikki", image: "/images/Gurmukhi_੨੧.svg", audio: "/audio/੨੧.mp3", group: "number" },
  { symbol: "੨੨", name: "bai", image: "/images/Gurmukhi_੨੨.svg", audio: "/audio/੨੨.mp3", group: "number" },
  { symbol: "੨੩", name: "tei", image: "/images/Gurmukhi_੨੩.svg", audio: "/audio/੨੩.mp3", group: "number" },
  { symbol: "੨੪", name: "chauvi", image: "/images/Gurmukhi_੨੪.svg", audio: "/audio/੨੪.mp3", group: "number" },
  { symbol: "੨੫", name: "pachhi", image: "/images/Gurmukhi_੨੫.svg", audio: "/audio/੨੫.mp3", group: "number" },
  { symbol: "੨੬", name: "shabbi", image: "/images/Gurmukhi_੨੬.svg", audio: "/audio/੨੬.mp3", group: "number" },
  { symbol: "੨੭", name: "satai", image: "/images/Gurmukhi_੨੭.svg", audio: "/audio/੨੭.mp3", group: "number" },
  { symbol: "੨੮", name: "athai", image: "/images/Gurmukhi_੨੮.svg", audio: "/audio/੨੮.mp3", group: "number" },
  { symbol: "੨੯", name: "unnati", image: "/images/Gurmukhi_੨੯.svg", audio: "/audio/੨੯.mp3", group: "number" },

  { symbol: "੩੦", name: "teeh", image: "/images/Gurmukhi_੩੦.svg", audio: "/audio/੩੦.mp3", group: "number" },
  { symbol: "੩੧", name: "ekatti", image: "/images/Gurmukhi_੩੧.svg", audio: "/audio/੩੧.mp3", group: "number" },
  { symbol: "੩੨", name: "batti", image: "/images/Gurmukhi_੩੨.svg", audio: "/audio/੩੨.mp3", group: "number" },
  { symbol: "੩੩", name: "tetti", image: "/images/Gurmukhi_੩੩.svg", audio: "/audio/੩੩.mp3", group: "number" },
  { symbol: "੩੪", name: "chaunti", image: "/images/Gurmukhi_੩੪.svg", audio: "/audio/੩੪.mp3", group: "number" },
  { symbol: "੩੫", name: "paintee", image: "/images/Gurmukhi_੩੫.svg", audio: "/audio/੩੫.mp3", group: "number" },
  { symbol: "੩੬", name: "shatti", image: "/images/Gurmukhi_੩੬.svg", audio: "/audio/੩੬.mp3", group: "number" },
  { symbol: "੩੭", name: "sainti", image: "/images/Gurmukhi_੩੭.svg", audio: "/audio/੩੭.mp3", group: "number" },
  { symbol: "੩੮", name: "athatti", image: "/images/Gurmukhi_੩੮.svg", audio: "/audio/੩੮.mp3", group: "number" },
  { symbol: "੩੯", name: "untali", image: "/images/Gurmukhi_੩੯.svg", audio: "/audio/੩੯.mp3", group: "number" },

  { symbol: "੪੦", name: "chaali", image: "/images/Gurmukhi_੪੦.svg", audio: "/audio/੪੦.mp3", group: "number" },
  { symbol: "੪੧", name: "ektali", image: "/images/Gurmukhi_੪੧.svg", audio: "/audio/੪੧.mp3", group: "number" },
  { symbol: "੪੨", name: "bataali", image: "/images/Gurmukhi_੪੨.svg", audio: "/audio/੪੨.mp3", group: "number" },
  { symbol: "੪੩", name: "tirtali", image: "/images/Gurmukhi_੪੩.svg", audio: "/audio/੪੩.mp3", group: "number" },
  { symbol: "੪੪", name: "chatali", image: "/images/Gurmukhi_੪੪.svg", audio: "/audio/੪੪.mp3", group: "number" },
  { symbol: "੪੫", name: "panjtali", image: "/images/Gurmukhi_੪੫.svg", audio: "/audio/੪੫.mp3", group: "number" },
  { symbol: "੪੬", name: "shayali", image: "/images/Gurmukhi_੪੬.svg", audio: "/audio/੪੬.mp3", group: "number" },
  { symbol: "੪੭", name: "santali", image: "/images/Gurmukhi_੪੭.svg", audio: "/audio/੪੭.mp3", group: "number" },
  { symbol: "੪੮", name: "athtali", image: "/images/Gurmukhi_੪੮.svg", audio: "/audio/੪੮.mp3", group: "number" },
  { symbol: "੪੯", name: "uninja", image: "/images/Gurmukhi_੪੯.svg", audio: "/audio/੪੯.mp3", group: "number" },

  { symbol: "੫੦", name: "panjah", image: "/images/Gurmukhi_੫੦.svg", audio: "/audio/੫੦.mp3", group: "number" },
  { symbol: "੫੧", name: "ekvinjah", image: "/images/Gurmukhi_੫੧.svg", audio: "/audio/੫੧.mp3", group: "number" },
  { symbol: "੫੨", name: "bavinja", image: "/images/Gurmukhi_੫੨.svg", audio: "/audio/੫੨.mp3", group: "number" },
  { symbol: "੫੩", name: "tirvinja", image: "/images/Gurmukhi_੫੩.svg", audio: "/audio/੫੩.mp3", group: "number" },
  { symbol: "੫੪", name: "charinja", image: "/images/Gurmukhi_੫੪.svg", audio: "/audio/੫੪.mp3", group: "number" },
  { symbol: "੫੫", name: "pachvinja", image: "/images/Gurmukhi_੫੫.svg", audio: "/audio/੫੫.mp3", group: "number" },
  { symbol: "੫੬", name: "shapinja", image: "/images/Gurmukhi_੫੬.svg", audio: "/audio/੫੬.mp3", group: "number" },
  { symbol: "੫੭", name: "satvinja", image: "/images/Gurmukhi_੫੭.svg", audio: "/audio/੫੭.mp3", group: "number" },
  { symbol: "੫੮", name: "athvinja", image: "/images/Gurmukhi_੫੮.svg", audio: "/audio/੫੮.mp3", group: "number" },
  { symbol: "੫੯", name: "unath", image: "/images/Gurmukhi_੫੯.svg", audio: "/audio/੫੯.mp3", group: "number" },

  { symbol: "੬੦", name: "satth", image: "/images/Gurmukhi_੬੦.svg", audio: "/audio/੬੦.mp3", group: "number" },
  { symbol: "੬੧", name: "ekatth", image: "/images/Gurmukhi_੬੧.svg", audio: "/audio/੬੧.mp3", group: "number" },
  { symbol: "੬੨", name: "batth", image: "/images/Gurmukhi_੬੨.svg", audio: "/audio/੬੨.mp3", group: "number" },
  { symbol: "੬੩", name: "tiretth", image: "/images/Gurmukhi_੬੩.svg", audio: "/audio/੬੩.mp3", group: "number" },
  { symbol: "੬੪", name: "chauntth", image: "/images/Gurmukhi_੬੪.svg", audio: "/audio/੬੪.mp3", group: "number" },
  { symbol: "੬੫", name: "pantth", image: "/images/Gurmukhi_੬੫.svg", audio: "/audio/੬੫.mp3", group: "number" },
  { symbol: "੬੬", name: "shayatth", image: "/images/Gurmukhi_੬੬.svg", audio: "/audio/੬੬.mp3", group: "number" },
  { symbol: "੬੭", name: "satatth", image: "/images/Gurmukhi_੬੭.svg", audio: "/audio/੬੭.mp3", group: "number" },
  { symbol: "੬੮", name: "athatth", image: "/images/Gurmukhi_੬੮.svg", audio: "/audio/੬੮.mp3", group: "number" },
  { symbol: "੬੯", name: "unattar", image: "/images/Gurmukhi_੬੯.svg", audio: "/audio/੬੯.mp3", group: "number" },

  { symbol: "੭੦", name: "sattar", image: "/images/Gurmukhi_੭੦.svg", audio: "/audio/੭੦.mp3", group: "number" },
  { symbol: "੭੧", name: "ekattar", image: "/images/Gurmukhi_੭੧.svg", audio: "/audio/੭੧.mp3", group: "number" },
  { symbol: "੭੨", name: "battar", image: "/images/Gurmukhi_੭੨.svg", audio: "/audio/੭੨.mp3", group: "number" },
  { symbol: "੭੩", name: "tihattar", image: "/images/Gurmukhi_੭੩.svg", audio: "/audio/੭੩.mp3", group: "number" },
  { symbol: "੭੪", name: "chauhattar", image: "/images/Gurmukhi_੭੪.svg", audio: "/audio/੭੪.mp3", group: "number" },
  { symbol: "੭੫", name: "panjattar", image: "/images/Gurmukhi_੭੫.svg", audio: "/audio/੭੫.mp3", group: "number" },
  { symbol: "੭੬", name: "shayattr", image: "/images/Gurmukhi_੭੬.svg", audio: "/audio/੭੬.mp3", group: "number" },
  { symbol: "੭੭", name: "satattar", image: "/images/Gurmukhi_੭੭.svg", audio: "/audio/੭੭.mp3", group: "number" },
  { symbol: "੭੮", name: "athattar", image: "/images/Gurmukhi_੭੮.svg", audio: "/audio/੭੮.mp3", group: "number" },
  { symbol: "੭੯", name: "unnasi", image: "/images/Gurmukhi_੭੯.svg", audio: "/audio/੭੯.mp3", group: "number" },

  { symbol: "੮੦", name: "assi", image: "/images/Gurmukhi_੮੦.svg", audio: "/audio/੮੦.mp3", group: "number" },
  { symbol: "੮੧", name: "ekeassi", image: "/images/Gurmukhi_੮੧.svg", audio: "/audio/੮੧.mp3", group: "number" },
  { symbol: "੮੨", name: "beassi", image: "/images/Gurmukhi_੮੨.svg", audio: "/audio/੮੨.mp3", group: "number" },
  { symbol: "੮੩", name: "tirassi", image: "/images/Gurmukhi_੮੩.svg", audio: "/audio/੮੩.mp3", group: "number" },
  { symbol: "੮੪", name: "charassi", image: "/images/Gurmukhi_੮੪.svg", audio: "/audio/੮੪.mp3", group: "number" },
  { symbol: "੮੫", name: "pachassi", image: "/images/Gurmukhi_੮੫.svg", audio: "/audio/੮੫.mp3", group: "number" },
  { symbol: "੮੬", name: "shayassi", image: "/images/Gurmukhi_੮੬.svg", audio: "/audio/੮੬.mp3", group: "number" },
  { symbol: "੮੭", name: "satassi", image: "/images/Gurmukhi_੮੭.svg", audio: "/audio/੮੭.mp3", group: "number" },
  { symbol: "੮੮", name: "athassi", image: "/images/Gurmukhi_੮੮.svg", audio: "/audio/੮੮.mp3", group: "number" },
  { symbol: "੮੯", name: "unanve", image: "/images/Gurmukhi_੮੯.svg", audio: "/audio/੮੯.mp3", group: "number" },

  { symbol: "੯੦", name: "nabbe", image: "/images/Gurmukhi_੯੦.svg", audio: "/audio/੯੦.mp3", group: "number" },
  { symbol: "੯੧", name: "ekanve", image: "/images/Gurmukhi_੯੧.svg", audio: "/audio/੯੧.mp3", group: "number" },
  { symbol: "੯੨", name: "banve", image: "/images/Gurmukhi_੯੨.svg", audio: "/audio/੯੨.mp3", group: "number" },
  { symbol: "੯੩", name: "tiranve", image: "/images/Gurmukhi_੯੩.svg", audio: "/audio/੯੩.mp3", group: "number" },
  { symbol: "੯੪", name: "charanve", image: "/images/Gurmukhi_੯੪.svg", audio: "/audio/੯੪.mp3", group: "number" },
  { symbol: "੯੫", name: "pachanve", image: "/images/Gurmukhi_੯੫.svg", audio: "/audio/੯੫.mp3", group: "number" },
  { symbol: "੯੬", name: "shayanve", image: "/images/Gurmukhi_੯੬.svg", audio: "/audio/੯੬.mp3", group: "number" },
  { symbol: "੯੭", name: "satanve", image: "/images/Gurmukhi_੯੭.svg", audio: "/audio/੯੭.mp3", group: "number" },
  { symbol: "੯੮", name: "athanve", image: "/images/Gurmukhi_੯੮.svg", audio: "/audio/੯੮.mp3", group: "number" },
  { symbol: "੯੯", name: "nardinve", image: "/images/Gurmukhi_੯੯.svg", audio: "/audio/੯੯.mp3", group: "number" },

  { symbol: "੧੦੦", name: "sau", image: "/images/Gurmukhi_੯੫.svg", audio: "/audio/੯੫.mp3", group: "numberL" },
  { symbol: "੧,੦੦੦", name: "hazaar", image: "/images/Gurmukhi_੯੬.svg", audio: "/audio/੯੬.mp3", group: "numberL" },
  { symbol: "੧੦,੦੦੦", name: "das-hazaar", image: "/images/Gurmukhi_੯੭.svg", audio: "/audio/੯੭.mp3", group: "numberL" },
  { symbol: "੧,੦੦,੦੦੦", name: "lakh", image: "/images/Gurmukhi_੯੮.svg", audio: "/audio/੯੮.mp3", group: "numberL" },
  { symbol: "੧੦,੦੦,੦੦੦", name: "das-lakh", image: "/images/Gurmukhi_੯੯.svg", audio: "/audio/੯੯.mp3", group: "numberL" },
];