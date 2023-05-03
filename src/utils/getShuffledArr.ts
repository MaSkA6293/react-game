export const getShuffledArr = (
  arr: (number | undefined)[],
): (number | undefined)[] => {
  let currentIndex = arr.length;
  let tempValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
  return arr;
};
