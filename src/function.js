//đọc text
export const speak = (text, lang) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang || "en-US"; // Đặt ngôn ngữ là tiếng Việt
  synth.speak(utterance);
};

//xáo trộn x2
export const shuffleDouble = (arr) => {
  return [...arr, ...arr].sort(() => Math.random() - 0.5);
};
