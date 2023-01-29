function sum(...args) {
  function s(x) {
    function ss(y) {
      return args[0] + x + y;
    }

    return ss;
  }

  return b ? a + b : s;
}

console.log(sum(2, 3)); // результат 5
console.log(sum(2)(3)(4)); // сумма всех элементов
