const generate2d = (n = 20, m = 20) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
    for (let j = 0; j < m; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
};

const randomNum = (max) => {
  return Math.floor(Math.random() * ((max + 1) - 0));
};

const main = () => {
  generate2d();
};