// Задание 4.
// Напишите код приложения, интерфейс которого представляет собой 2 input 
// и кнопку submit. В input можно ввести любое число. При клике на кнопку 
// происходит следующее:Если оба числа не попадают в диапазон от 100 до 300
//  или введено не число — выводить ниже текст «одно из чисел вне диапазона 
//  от 100 до 300»; Если числа попадают в диапазон от 100 до 300 — сделать 
//  запрос c помощью fetch по URL https://picsum.photos/200/300, где первое 
//  число — ширина картинки, второе — высота.
// Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран.
// Подсказка: получение данных из input.
// const value = document.querySelector('input').value;


const btn = document.querySelector(".button"); 
const insert = document.querySelector(".output");


const pictureInsert = (value1, value2) => {   
  fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {  return response.url;})
    .then((url) => { insert.innerHTML = `<div> <img src="${url}"/></div>`;})
    .catch(() => { console.log('error') });
}


btn.addEventListener('click',() => {
    let value1 = +document.querySelector(".input1").value;
    let value2 = +document.querySelector(".input2").value;
    if(value1 < 100 || value2 >300 || value2 < 100 || value1 >300) 
    {alert("Width and/or Height are out of range 100-300, try again!"); return;}
    else { pictureInsert(value1, value2);}
});