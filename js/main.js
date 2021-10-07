var text = document.getElementById('text');
text.title = "New Text";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New<br>string";

// document.getElementById('text').style.color = "white";

// var spans = document.getElementsByTagName('span');


var spans = document.getElementsByClassName('span');

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}