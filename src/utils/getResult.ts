export const getResult = (a: number[], b: number[], sign: string): number[] => {
  const arrResult: number[] = [];
  for (let i = 0; i < a.length; i++) {
    switch (sign) {
      case '+':
        arrResult.push(a[i] + b[i]);
        break;
      case '-':
        arrResult.push(a[i] - b[i]);
        break;
      case '*':
        arrResult.push(a[i] * b[i]);
        break;
      case ':':
        arrResult.push(a[i] / b[i]);
        break;
    }
  }
  return arrResult;
};
