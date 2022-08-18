
// Задание 5.
// Написать код приложения, интерфейс которого состоит из двух input и кнопки. 
// В input можно ввести любое число.Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:
// Если число в первом input не попадает в диапазон от 1 до 10 или не является 
// числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является 
// числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить
//  ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос 
// по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — 
// это число из первого input, а GET-параметр limit — это введённое число второго input. 
// Пример: если пользователь ввёл 5 и 7, то запрос будет 
// вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.
// Если пользователь перезагрузил страницу, то ему должны показываться картинки из 
// последнего успешно выполненного запроса (использовать localStorage).

const btn = document.querySelector(".button"); 
let insert = document.querySelector(".output");

const f2 = (value1, value2) => {
//    
    fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
        .then((response) => { return response.json(); })
        .then((data) => {
            localStorage.clear();
            let cards ="";
            data.forEach(item => {    
                const singlePicture = `
                <div style="margin-left: 20px; margin-top: 20px;">
                <img src="${item.download_url}"
                    width ='200' />
                <p>${item.author}</p>    
                </div>
                `;
            cards += singlePicture;
            insert.innerHTML = cards;
            localStorage.setItem("cards", cards);
            }); })
        .catch(() => { console.log('error') });
} 



btn.addEventListener('click', () => {  
let value1 = +document.querySelector(".input1").value;
let value2 = +document.querySelector(".input2").value;

    if((value1 < 1 || value1 >10) && (value2 < 1 || value2 >10) || isNaN(value1) || isNaN(value2)) 
    {alert("Номер страницы и лимит вне диапазона от 1 до 10"); return;}
    else if (value1 < 1 || value1 >10 || isNaN(value1)) 
    {alert("Номер страницы вне диапазона от 1 до 10"); return;}
    else if (value2 < 1 || value2 >10 || isNaN(value2))
    {alert("Лимит вне диапазона от 1 до 10"); return;}
    else { f2(value1, value2);}
    
});

document.addEventListener("DOMContentLoaded", () => {
    let cashedCards = localStorage.getItem("cards");
    console.log(cashedCards);
    if (cashedCards) {
        insert.innerHTML = cashedCards;
    }});



/////////////////

// function sendRequest(page, limit) {
//     let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = function () {
//         let response = JSON.parse(xhr.response);
//         let images = ``;
//         localStorage.clear();
//         for (let img of response) {
//             images += `<img src="${img.download_url}" width="300px" style="margin: 10px;">`;
//         }
//         localStorage.setItem("images", images);
//         resultNode.innerHTML = images;
//     }
//     xhr.send();
// }
// btn.addEventListener("click", () => {
//     let page = +pageInput.value;
//     let limit = +limitInput.value;
//     let valuesRange = [1, 10];
//     if (validateValue(page, valuesRange) && validateValue(limit, valuesRange)) {
//         sendRequest(page, limit);
//     } else if (validateValue(page, valuesRange)) {
//         resultNode.innerText = "Лимит вне диапазона от 1 до 10";
//     } else if (validateValue(limit, valuesRange)) {
//         resultNode.innerText = "Номер страницы вне диапазона от 1 до 10";
//     } else {
//         resultNode.innerText = "Номер страницы и лимит вне диапазона от 1 до 10";
//     }
// });
// document.addEventListener("DOMContentLoaded", () => {
//     let imagesHtml = localStorage.getItem("images");
//     if (imagesHtml) {
//         resultNode.innerHTML = imagesHtml;
//     }
// });