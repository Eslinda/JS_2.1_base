"use strict"
function solveEquation(a, b, c) {
  let arr;
  arr = [];
  let d = b**2-4*a*c;
  if (d === 0) {
    arr[0] = -b/(2*a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (Number.isNaN(parseInt(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (Number.isNaN(parseInt(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (Number.isNaN(parseInt(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  let sumMortgage = amount - contribution;
  let percentMounth = percent/1200;
  let currentDate = new Date();
  let month = date.getMonth() - currentDate.getMonth() + (12* (date.getFullYear()- currentDate.getFullYear())); 
  let monthlyPayment = sumMortgage*(percentMounth + (percentMounth/(Math.pow((1+percentMounth), month)-1)));
  totalAmount = parseFloat((monthlyPayment*month).toFixed(2));
  return totalAmount;
}
