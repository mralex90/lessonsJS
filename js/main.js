function summa(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) 
        sum += arr[i];

        return sum;
}

var array = [6, 8, 1];
var array_2 = [6, 8, 1, 7];
var array_3 = [6, 8, 1, 90];

var res = summa(array);
res *= 2;
console.log("Результат: " + res);
// summa(array_2);
// summa(array_3);