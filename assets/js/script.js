/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
function drawChess() {
  const containerBlock = document.querySelector('.container');
  let block;
  let flag = true;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (j === 0) flag = !flag;

      block = document.createElement('div');

      if (flag) block.className = 'block black-block';
      else block.className = 'block white-block';

      containerBlock.appendChild(block);
      flag = !flag;
    }
  }
}

drawChess();
