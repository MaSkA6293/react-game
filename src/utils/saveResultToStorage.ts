export const saveResultToStorage = (
  record: number,
  sign: string,
  countNumber: number
): void => {
  const storage = localStorage.getItem("quick-count");
  if (storage) {
    const parseStorage = JSON.parse(storage);
    if (parseStorage[`${sign}`] !== undefined) {
      if (parseStorage[`${sign}`][`${countNumber}`] !== undefined) {
        if (+parseStorage[`${sign}`][`${countNumber}`].record > record) {
          const newRecord = { ...parseStorage[`${sign}`][`${countNumber}`] };
          newRecord.record = record;
          const newCount = {
            ...parseStorage[`${sign}`],
            [`${countNumber}`]: newRecord,
          };
          const newSign = { ...parseStorage, [`${sign}`]: newCount };
          localStorage.setItem("quick-count", JSON.stringify(newSign));
        }
      } else {
        const obj = {
          ...parseStorage,
          [`${sign}`]: {
            ...parseStorage[`${sign}`],
            [`${countNumber}`]: { record: record },
          },
        };
        localStorage.setItem("quick-count", JSON.stringify(obj));
        return;
      }
    } else {
      const obj = {
        [`${sign}`]: { [`${countNumber}`]: { record: record } },
      };
      localStorage.setItem(
        "quick-count",
        JSON.stringify({ ...parseStorage, ...obj })
      );
    }
  } else {
    const obj = {
      [`${sign}`]: { [`${countNumber}`]: { record: record } },
    };
    localStorage.setItem("quick-count", JSON.stringify(obj));
  }
};
