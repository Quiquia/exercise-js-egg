export function lengthOf(text) {
  const lengthText = text.length;

  if (text.length <= 0 || text.length === undefined)
    return console.log("invalid input");

  console.log(lengthText);
}
