"use strict";

function solveEquation(a, b, c) {
  const arr = [];
  const d = b * b - 4 * a * c;
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(percent) || percent < 0 || percent > 100) {
    return "Неверное значение процентной ставки";
  }
  if (isNaN(contribution) || contribution < 0) {
    return "Неверное значение первоначального взноса";
  }
  if (isNaN(amount) || amount < 0) {
    return "Неверное значение суммы кредита";
  }
  if (isNaN(countMonths) || countMonths < 0) {
    return "Неверное значение количества месяцев";
  }

  let p = percent / 100 / 12;

  let s = amount - contribution;

  let payment = s * (p + p / (Math.pow(1 + p, countMonths) - 1));

  let totalAmount = payment * countMonths;

  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
}