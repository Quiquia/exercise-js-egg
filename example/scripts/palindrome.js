export function palindrome(text) {
  const metSplit = text.split("");
  const reverseArray = metSplit.reverse();
  const joinArray = reverseArray.join("");

  //   console.log(metSplit, reverseArray, joinArray);

  const result = text === joinArray;

  console.log("🚀 ~ palindrome ~ result:", result);
}
