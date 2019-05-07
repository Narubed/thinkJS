const sayHello = () => 'Hello';
const delaySayHello = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Delay Hello');
  }, 1000);
});
const testtex = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('ddddddd');
  }, 2000);
});
const main = async () => {
  const a = sayHello();
  console.log(a);

  const b = await delaySayHello();
  const c = await testtex();

  console.log(b);
  console.log(c);
};
main();
