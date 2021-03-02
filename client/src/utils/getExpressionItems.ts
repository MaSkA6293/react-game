function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
export const getExpressionItems = (
  count: number,
  sign: string,
  countNumber: number
): [number[], number[]] => {
  let min: number, max: number;
  switch (countNumber) {
    case 1:
      min = 0;
      max = 10;
      break;
    case 2:
      min = 10;
      max = 100;
      break;
    case 3:
      min = 100;
      max = 1000;
      break;
  }
  const arrA = Array(count)
    .fill(undefined)
    .map(() => {
      //return Math.floor(Math.random() * 10);
      return Math.floor(getRandomArbitrary(min, max));
    });
  const arrB = Array(count)
    .fill(undefined)
    .map(() => {
      //  return Math.floor(Math.random() * 10);
      return Math.floor(getRandomArbitrary(min, max));
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
