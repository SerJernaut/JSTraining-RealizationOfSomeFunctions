'use strict';


let arr1 = [];

for(let i=0; i< 10; i++) {
    arr1.push(Math.random() * 100);
}

for(let i=0; i< 10; i++) {
    console.log(arr1[i]);
}

/*
1. Функция принимает массив и выводит его на экран.
 */

function logArray(arr) {
    if(Array.isArray(arr)) {
        for(let i=0; i< arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

/*
2. Функция принимает массив и выводит только четные
элементы.
 */

function arrEvenElements (arr) {
    if(Array.isArray(arr)) {
        for(let i=0; i< arr.length; i++) {
            if(arr[i] % 2 == 0) {
                console.log(arr[i]);
            }
        }
    }
}

/*
3. Функция принимает массив и возвращает сумму всех
элементов массива.
 */

function arrElementsSum (arr) {
    if(Array.isArray(arr)) {
        let sum = 0;
        for(let i=0; i< arr.length; i++) {
            sum+= arr[i];
        }
        console.log(sum);
    }
}

/* 4. Функция принимает массив и возвращает его максималь-
ный элемент.
*/

function arrMax(arr) {
        if(Array.isArray(arr)) {
        let max = arr[0];
        for(let i=1; i< arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }

}
}


/* 5. Функция добавления нового элемента в массив по ука-
занному индексу.
*/



function arrPushElement (arr, index, value) {
   if(Array.isArray(arr)){
    if(index >= 0) {
        return arr[index] = value;
    }

    else {
            "error";
    }
}
}

/* 6. Функция удаления элемента из массива по указанному
индексу.
*/

function arrDeleteElement (arr, index) {
    if(Array.isArray(arr)) {
    if(index >= 0) {
        delete arr[index]; 
        for(let i = index+1; i < arr.length;i++)
        arr[i] = arr[i+1];
    }

    else {
            "error";
    }
}
}





