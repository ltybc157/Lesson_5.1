console.log('//------кнопка Начать расчет-----------------------------------');
let start = document.getElementById('start');
console.log(start);
console.log('//------вся правая сторона-------------------------------------');
let budgetValue = document.getElementsByClassName('budget-value'); //1
let daybudgetValue = document.getElementsByClassName('daybudget-value'); //2
let levelValue = document.getElementsByClassName('level-value'); //3
let expensesValue = document.getElementsByClassName('expenses-value'); //4
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'); //5
let incomeValue = document.getElementsByClassName('income-value'); //6
let monthsavingsValue = document.getElementsByClassName('monthsavings-value'); //7
let yearsavingsValue = document.getElementsByClassName('yearsavings-value'); //8
console.log(budgetValue[0]);
console.log(daybudgetValue[0]);
console.log(levelValue[0]);
console.log(expensesValue[0]);
console.log(optionalexpensesValue[0]);
console.log(incomeValue[0]);
console.log(monthsavingsValue[0]);
console.log(yearsavingsValue[0]);
console.log('//-------------Введите обязательные расходы----------------------');
expensesItem = document.getElementsByClassName('expenses-item');
console.log(expensesItem[0]);
console.log(expensesItem[1]);
console.log(expensesItem[2]);
console.log(expensesItem[3]);
console.log('//--------------Утвердить кнопки и кнопку Расщитать--------------');
Batton = document.getElementsByTagName('button');
console.log(Batton[0]);
console.log(Batton[1]);
console.log(Batton[2]);
console.log('//----------------Введите необязательные расходы-------------------');
optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpensesItem[0]);
console.log(optionalexpensesItem[1]);
console.log(optionalexpensesItem[2]);
console.log('//----------------------День, месяц, год.--------------------------');
let yearValue = document.querySelectorAll('.year-value');
let monthValue = document.querySelectorAll('.month-value');
let dayValue = document.querySelectorAll('.day-value');
console.log(yearValue[0]);
console.log(monthValue[0]);
console.log(dayValue[0]);
console.log('//---------Статьи возможного дохода, чекбокс, сумма, процент-------');
let chooseIncomeLabel = document.querySelectorAll('.choose-income-label');
let Sum = document.querySelectorAll('.choose-sum');
let ChoosePercent = document.querySelectorAll('.choose-percent');
let checksavings = document.querySelectorAll('checksavings');
console.log(chooseIncomeLabel[0]);
console.log(Sum[0]);
console.log(ChoosePercent[0]);
console.log(checksavings[0]);