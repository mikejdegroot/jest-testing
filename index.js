export const sum = (a, b) => {
  return a + b;
};

export const duplicateValue = (a) => {
  const b = a;
  return b;
};

const mockApi = async () => {
  let time = 0;
  await new Promise((resolve) =>
    setTimeout(() => {
      time = 10;
      resolve();
    }, 3000)
  );
  return time;
};

export const fetchData = async () => {
  console.log("1");
  try {
    const data = await mockApi();
    console.log("2");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
