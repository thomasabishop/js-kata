function prime(int) {
  let n = int;
  while (n % 2 == 0) {
    n = n / 2;
    console.log(n);
  }
}
