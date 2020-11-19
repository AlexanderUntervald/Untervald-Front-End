let a = $('.first');
a.text('jdgjgjdkgj');
console.log(a.text());
//ничего не выводит в консоль ! 







//HomeWork 1 


//1) сума цыфр числа

//function Summ(a) {
//    let sum = 0;
//     sum += 2;
//    sum += a % 10;
//    a = Math.floor(a / 10);
//    sum += a % 10;
//   a = Math.floor(a / 10);
//  sum += a % 10;
//    a = Math.floor(a / 10);
//    sum += a % 10;
//    a = Math.floor(a / 10);
//    return sum;
// }
//let arr = Summ(2345);
//console.log(arr);


// 2) - среднее арефметическое

//function Average(a) {
//    let sum = 0;
//    for (i = 0; i < a.lenght; i++) {
//        sum += a[i];
//    }
//    let avr = sum / a.lenght;
//    return avr;
//}
//let arr = Average([10, 15, 22, 34]);
//console.log(arr);


//3)сума всіх парних чисел відняти         сума всіх непарних

//function MyArray(a) {
//    let sum = 0;
//    let sum1 = 0;
//    for (let i = 0; i < a.length; i++) {
//        if (a[i] % 2 == 0) {
//            sum += a[i];
//        } else {
//            sum1 += a[i];
//        }
//    }
//    return sum - sum1;
//}
//
//b = MyArray([4, 7, 20, 15, 17, 22]);
//console.log(b);

//4)фунція аргументами  якої будуть два масиви цілих чисел і ця функція буде повертати масив зі спільних елементів

//  ???????????????????


//                HomeWork2

//1)  При кліку на кнопку поміняти колір тексту в виділеному тегу   р
//
//document.getElementById("change_color").addEventListener("click",
//    function () {
//        document.getElementsByClassName("second")[0].classList.add('blue');
//    }
//);









//2) При кліку змінити текст заголовку на своє Імя Прізвище






//3)  При кліку порахувати кількість слів у виділеному тегу  "р"Після цього дописати цю кількість до тексту "words in first text:"





//4) При кліку вивести в alert виділений текст, а також видалити його зі сторінки
