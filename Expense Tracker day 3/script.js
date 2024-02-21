"use strict"

const expenseBtn = document.querySelector('#expense-button');
const expenseNameInput = document.querySelector('#expense-name');
const expenseAmountInput = document.querySelector('#expense-amount');
const expenseList = document.querySelector('#expense-list');
const totalAmount = document.querySelector('#total-amount');

let items = JSON.parse(localStorage.getItem('items')) || [];
let total = JSON.parse(localStorage.getItem('total')) || 0;
totalAmount.innerText = total;

update()

function addExpence(){
  if(expenseNameInput.value && expenseAmountInput.value){
    items.push({
      id: new Date().getTime(),
      name: expenseNameInput.value,
      amount: expenseAmountInput.value,
    })

    localStorage.setItem('items', JSON.stringify(items));
  
    for (let i = items.length - 1; i < items.length; i++){
      total += parseInt(items[i].amount);
    }
    localStorage.setItem('total', JSON.stringify(total));

    update()
  }
}

function update(){

  expenseList.innerHTML = items.map(item => `
  <tr>
    <td>${item.name}</td>
    <td>$${item.amount}</td>
    <td class="delete-btn" onclick="deleteExpense(${item.id})">Delete</td>
  </tr>`).join('')

  totalAmount.innerText = total;
  expenseNameInput.value = '';
  expenseAmountInput.value = ''; 
}

function deleteExpense(itemId){
  let index = items.findIndex(obj => obj.id === itemId);
  total -= items[index].amount;
  localStorage.setItem('total', JSON.stringify(total));
  if (index !== -1) {
    items.splice(index, 1);
  }
  localStorage.setItem('items', JSON.stringify(items));
  update()
}   
