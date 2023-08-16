export function countDown(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('Entered not a number!');
  } else if (n < 1) {
    throw new Error('Number must be positive!');
  };
  for (let i = n; i > 0; i--) {
    console.log(i)
  }
}
