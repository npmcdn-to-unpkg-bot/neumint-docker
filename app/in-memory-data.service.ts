export class InMemoryDataService {
  createDb() {
    let expenses = [
      {id: 101, name: 'School Supplies', category:"School", amount:"30"},
      {id: 102, name: 'Entertainment', category:"Activities", amount:"20"},
      {id: 103, name: 'Auto Insurance', category:"Auto", amount:"120"},
      {id: 104, name: 'Auto Rental', category:"Travel", amount:"300"},
      {id: 105, name: 'Train Fare', category:"Travel", amount:"10"},
      {id: 106, name: 'Aire Fare', category:"Travel", amount:"500"},
      {id: 107, name: 'Gasoline', category:"Travel", amount:"27"},
      {id: 108, name: 'Car Loan', category:"Loans", amount:"450"},
      {id: 109, name: 'Electric Bill', category:"Utilities", amount:"40"},
      {id: 110, name: 'Gym membership', category:"Activities", amount:"50"}
    ];
    return {expenses};
  }
}
