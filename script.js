const calcTip = bill => (bill >= 30 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBills = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totalBills[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(totalBills);

console.log(calculateAverage(bills));
