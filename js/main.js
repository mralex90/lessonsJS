// // alert("Какая хорошая погода)");
// var data = confirm("Вы сейчас дома?");
// if(data){
//     alert("Вы молодец!");
// }

// var data = prompt("Скажите сколько вам лет");
// console.log(data);

var person = null;
if(confirm("Вы точно уверены?")) {
    person = prompt("Введите ваше имя");
    alert("Привет, " + person);
}else {
    alert("Вы нажали на 'Отмена'"); 
}