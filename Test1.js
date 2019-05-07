import testFunc from './TEST2';

function AA(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 5);
    }, 500);
  });
}

async function addAsync(x) {
  const a = await AA(2);
  const b = await AA(5);
  const c = await AA(8);
  return x + a + b + c;
}


addAsync(2).then((sum) => {
  console.log(sum);
});
testFunc();
