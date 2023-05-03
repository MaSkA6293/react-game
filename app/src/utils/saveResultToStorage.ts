export const saveResultToStorage = (
  record: number,
  sign: string,
  countNumber: number,
  level: number,
): void => {
  const storage = localStorage.getItem('results');

  if (storage) {
    const prevRes =
      JSON.parse(storage)[`${sign}`][`${countNumber}`][`${level}`].result;
    if (prevRes > record || prevRes === '--') {
      const updateResults = JSON.parse(storage);
      updateResults[`${sign}`][`${countNumber}`][`${level}`].result = record;
      localStorage.setItem('results', JSON.stringify(updateResults));
    } else return;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const objResults: any = {
      '+': {
        1: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        2: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        3: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
      },
      '-': {
        1: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        2: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        3: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
      },
      '*': {
        1: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        2: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        3: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
      },
      ':': {
        1: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        2: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
        3: { 1: { result: '--' }, 2: { result: '--' }, 3: { result: '--' } },
      },
    };
    objResults[`${sign}`][`${countNumber}`][`${level}`].result = record;
    localStorage.setItem('results', JSON.stringify(objResults));
  }
};
