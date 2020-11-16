// HomeWork 1 
//function Summ(a) {
//    let sum = 0;
//    sum +=2;
//    sum += a % 10;
//    a = Math.floor(a / 10);
//    sum += a % 10;
//    a = Math.floor(a / 10);
//    sum += a % 10;
//    a = Math.floor(a / 10);
//    sum += a % 10;
//    a = Math.floor(a / 10);
//    return sum;
//}

//let arr = Summ(2345);
//console.log(arr);

// HomeWork 2 - non

//function Average(a) {
//   let sum = 0;
//    for (i = 0; i < a.lenght; i++){
//     sum += a[i];  
//    }
//   let avr = sum / a.lenght; 
//    return avr;
//}
//let arr = Average([10, 15, 22, 34]);
//console.log(arr);


function MyArray(a) {
    let sum = 0;
    let sum1 = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            sum += a[i];
        } else {
            sum1 += a[i];
        }
    }
    return sum - sum1;
}

b = MyArray([4, 7, 20, 15, 17, 22]);
console.log(b);
//console.log(sum1 - sum2);

document.getElementById("change_color").addEventListener("click",
    function () {
        document.getElementsByClassName("second")[0].classList.add('blue');
    }
);
