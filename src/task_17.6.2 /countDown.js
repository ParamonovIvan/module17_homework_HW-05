export function countDown(n) {
  if ((typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('Invalid n parameter');
  };
  for (let i = n; i > 0; i--) {
    console.log(i)
  };
}
