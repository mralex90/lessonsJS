var counter = 0;

function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;
}