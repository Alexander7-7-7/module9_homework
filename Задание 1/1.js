// Задание 1.
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, 
// который будет преобразовывать XML в JS-объект и выводить его в консоль.

//  XML:

const parser = new DOMParser();
const xmlString =
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelectorAll("list");
const studentNode = xmlDOM.querySelectorAll("student");
const studentName = xmlDOM.querySelectorAll("name");
const studentFirstName = xmlDOM.querySelectorAll("first");
const studentLastName = xmlDOM.querySelectorAll("second");
const studentAge = xmlDOM.querySelectorAll("age");
const studentProf = xmlDOM.querySelectorAll("prof");

let result = new Object();
let res = new Object;

        for (let i = 0; i < studentNode.length; i++) {
            result = {
                    name: studentFirstName[i].textContent  +" "+ studentLastName[i].textContent,
                    age: Number(studentAge[i].textContent),
                    prof: studentProf[i].textContent,
                    lang: studentName[i].getAttribute("lang")
                    }
            console.log(result);
            }


// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }