var counter = 0;

function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;
}

function onInput(el) {
    if(el.value == "Hello!")
        alert("И тебе привет!")
    console.log(el.value);
}