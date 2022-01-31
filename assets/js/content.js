const data = Array.from(Array(35).keys());

for (let i = 0; i < data.length; i++) {
  const num = fibonacci(data[i]);
  console.log(num);
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
