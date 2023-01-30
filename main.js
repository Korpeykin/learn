function sum(...args) {
  function s(x) {
    function ss(y) {
      return args[0] + x + y;
    }

    return ss;
  }

  return args[1] ? args[0] + args[1] : s;
}

console.log(sum(2, 3)); // результат 5
console.log(sum(2)(3)(4)); // сумма всех элементов
