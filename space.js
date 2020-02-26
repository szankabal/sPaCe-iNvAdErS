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


const player = (x, y, array) => {
  array[x][y] = 'P';
  return '';
};

const main = () => {
  generate2d();
  const x = randomNum(20);
  const y = 0;
  const array = generate2d();
  player(x, y, array);
  console.log(array);
};

const spawnMeteor = (array) => {
  const r1 = randomNum(20);
  const r2 = randomNum(20);
  if (r2 === r1) {
    spawnMeteor(array);
  }
  array[r1][array[r1].length - 1] = 'x';
  array[r2][array[r2].length - 1] = 'x';
};

main();
