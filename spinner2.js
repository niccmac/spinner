let spinnerChara = [(`\r|     `), (`\r/     `), (`\r-     `),(`\r\\     `)];
let time = -100;
setTimeout(() => {
  for (let spin in spinnerChara) {
    process.stdout.write(spinnerChara[spin]);
    time += time + 200;
  }
}, time);

