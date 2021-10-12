var counter = 0;
// setInterval(my_func, 1000);

// var counter = 0;
// function my_func() {
//     counter++;
//     console.log("Counter: " + counter);
// }

setInterval(function() {
    
    counter++;
    console.log("Прошло секунд: " + counter);
}, 1000);