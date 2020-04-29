/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
function drawChess() {
  const containerBlock = document.querySelector('.container');
  let block;
  let flag = true;
  let numbers = 1;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let pointer = 0;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (col === 1) flag = !flag;

      block = document.createElement('div');

      if (row === 0 && col !== 0) {
        block.className = 'block boardNumbers';
        block.innerText = numbers++;
      } else if (col === 0 && row !== 0) {
        block.className = 'block boardNumbers';
        block.innerText = letters[pointer++];
      } else if (row === 0 && col === 0) {
        block.className = 'block boardNumbers';
      } else if (flag) {
        block.className = 'block white-block';
        flag = !flag;
      } else {
        block.className = 'block black-block';
        flag = !flag;
      }

      containerBlock.appendChild(block);
    }
  }
}

drawChess();
