export function getRandomNumber(digit) {
  const baseNumber = 10 ** (digit - 1);
  const multipier = 10 ** digit - baseNumber;

  console.log(multipier);
  const result = Math.floor(baseNumber + Math.random() * multipier);
}
