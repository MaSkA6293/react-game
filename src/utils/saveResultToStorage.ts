export const saveResultToStorage = (record: number, sign: string): void => {
  const storage = localStorage.getItem("quick-count");
  if (storage) {
    const parseStorage = JSON.parse(storage);
    if (parseStorage[`${sign}`] !== undefined) {
      if (+parseStorage[`${sign}`].record > record) {
        localStorage.setItem(
          "quick-count",
          JSON.stringify({
            ...parseStorage,
            [`${sign}`]: { record: record },
          })
        );
      }
    } else {
      const obj = {
        [`${sign}`]: { record: record },
      };
      localStorage.setItem(
        "quick-count",
        JSON.stringify({ ...parseStorage, ...obj })
      );
    }
  } else {
    const obj = {
      [`${sign}`]: { record: record },
    };
    localStorage.setItem("quick-count", JSON.stringify(obj));
  }
};
