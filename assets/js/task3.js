'use strict';

let arr1 = [1,2,3,4,5,6];
let arr2 = [1,1,4,6,8,9,0,10];

/*
1. Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из двух массивов
без повторений.
*/



function concatArrays (arr1, arr2) {
    for(let i = 0; i < arr1.length || arr2.length; i++) {
    res = arr1.concat(arr2.filter(i=>arr1.indexOf(i)===-1));
    return console.log(res); }
}

/*
2. Функция принимает 2 массива и возвращает новый массив,
в котором собраны общие элементы (то есть элементы,
которые встречаются и в первом и во втором массивах)
без повторений.
*/

function commonElements (arr1, arr2) {

    res = [];
    for(let i = 0; i< arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
          if (arr1[i] == arr2[j]) {
            res.push(arr1[i]);
        }
    }
   }

   return console.log(res);
}


/*
3. Функция принимает 2 массива и возвращает новый мас-
сив, в котором собраны все элементы из первого массива,
которых нет во втором массиве.
*/

function func(arr1,arr2) {
        if (Array.isArray(arr1) && Array.isArray(arr2)) {
            const result = [];
            for (let i = 0; i < arr1.length; i++) {
                if (arr2.lastIndexOf(arr1[i])===-1) {
                    result.push(arr1[i]);
                }
            }
            return result;
        }
        else {
            console.log("It is not an array");
        }
    }
}

