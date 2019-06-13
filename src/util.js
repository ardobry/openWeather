export const getDay = timestamp => {
  let day = new Date(timestamp * 1000).toUTCString().slice(0, 3);

  return day;
};

export const objFilter = obj => {
  let result = {},
    sorted = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 },
    key;

  for (key in obj) {
    //Filtering the object from empty items
    if (Object.keys(result).length >= 5) break;
    if (obj[key].length !== 0) {
      result[key] = obj[key];
    }
  }

  let sortedData = []; //sorting the object by days of the week
  Object.keys(result).forEach(key => {
    let value = result[key],
      index = sorted[key];
    sortedData[index] = {
      day: key,
      hours: value
    };
  });

  return sortedData;
};
