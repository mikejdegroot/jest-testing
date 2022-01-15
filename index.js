export const sum = (a, b) => {
  return a + b;
};

export const duplicateValue = (a) => {
  const b = a;
  return b;
};

const mockApi = async () => {
  let data = "nothing";
  await new Promise((resolve) =>
    setTimeout(() => {
      data = "api data";
      resolve();
    }, 3000)
  );
  return data;
};

export const fetchData = async () => {
  try {
    const data = await mockApi();
    return data;
  } catch (err) {
    console.log(err);
    throw err.toString();
  }
};

fetchData();
