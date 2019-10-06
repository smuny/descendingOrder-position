while (true) {
  let max = 0;
  let position = 0;
  for (let i = 0; i < 8; i++) {
      const mountainH = parseInt(readline()); // represents the height of one mountain.
      if(mountainH >= max){
          position = i;
          max = mountainH;
          }
      // console.log(i);
  }
  print(position);

  