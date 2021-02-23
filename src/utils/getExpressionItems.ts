export const getExpressionItems = (
  count: number,
  sign: string
): [number[], number[]] => {
  const arrA = Array(count)
    .fill(undefined)
    .map(() => {
      return Math.floor(Math.random() * 10);
    });
  const arrB = Array(count)
    .fill(undefined)
    .map(() => {
      return Math.floor(Math.random() * 10);
    });
  if (sign === "-") {
    let tempValue: number;
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] < arrB[i]) {
        tempValue = arrA[i];
        arrA[i] = arrB[i];
        arrB[i] = tempValue;
      }
    }
  }
  if (sign === ":") {
    let tempValue: number;
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] < arrB[i]) {
        tempValue = arrA[i];
        if (arrB[i] === 0) {
          arrB[i] += 1;
        }
        arrA[i] = arrB[i];
        arrB[i] = tempValue;
      }
      const getRandomArbitrary = (min: number, max: number): number => {
        return Math.random() * (max - min) + min;
      };
      if (getRandomArbitrary(0, 1)) {
        while (arrA[i] % arrB[i] !== 0) {
          arrB[i] += 1;
        }
      } else {
        while (arrA[i] % arrB[i] !== 0) {
          arrA[i] += 1;
        }
      }
    }
  }
  return [arrA, arrB];
};
