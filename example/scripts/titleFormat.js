export function titleFormat(textFormat) {
  const firstLetter = textFormat.charAt(0);
  const firstLetterUpperCase = firstLetter.toUpperCase();

  const textSlice = textFormat.slice(1);
  const textToLowerCase = textSlice.toLowerCase();

  const concatenarText = firstLetterUpperCase + textToLowerCase;

  const lenghtText = concatenarText.length;

  console.log(concatenarText);
  console.log(lenghtText);
}
