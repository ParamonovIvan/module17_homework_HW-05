export function countDown(n) {
  if ((typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('n is not a number');
  };
  for (let i = n; i > 0; i--) {
    console.log(i)
  };
}