const expenses = [
  { category: 'food', amount: 120 },
  { category: 'travel', amount: 300 },
  { category: 'bills', amount: 450 },
  { category: 'food', amount: 80 }
];

const foodExpenses = expenses
  .filter(user => user.category == 'food')
  .map(user => user.amount)
  .reduce((acc, name) => acc + name );

console.log(foodExpenses); 