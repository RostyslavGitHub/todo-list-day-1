const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

console.log(itemsArr)

ul.innerHTML = itemsArr.map(item => `<li>${item}</li>`).join('');

function add(){
    itemsArr.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArr))
    const li = document.createElement('li')
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}

function del(){
    itemsArr = [];
    localStorage.clear();
    ul.innerHTML = itemsArr.map(item => `<li>${item}</li>`).join('');
}