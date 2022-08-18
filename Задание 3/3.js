// Задание 3.
// Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
// В input можно ввести любое число. При клике на кнопку происходит следующее:
// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне 
// диапазона от 1 до 10». Если число попадает в диапазон от 1 до 10 — сделать запрос 
// c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.
// Подсказка: получение данных из input.
// const value = document.querySelector('input').value;

const xhr = new XMLHttpRequest();
let result;
let cards = '';
let insert = document.querySelector(".output");

xhr.onload = function(result) {
result = JSON.parse(xhr.response); 
result.forEach(item => {    
    const cardForm = `
    <div class="card">
    <img src="${item.download_url}"
        width ='200'/>
    <p>${item.author}</p>    
    </div>
    `;
cards += cardForm;
});

insert.innerHTML = cards;
};

xhr.onerror = function() {
  console.log('Ошибка запроса');
};

const btn = document.querySelector(".button"); 


function f2 () {
    const limit = +document.querySelector(".input").value;

    if(limit < 1 || limit >10 || isNaN(limit)) {console.log("Out of range 1-10, try again!"); return;}
    else {  
        xhr.open("get", `https://picsum.photos/v2/list?limit=${limit}`, true);
        xhr.send();
    }
}

btn.addEventListener("click", f2); 