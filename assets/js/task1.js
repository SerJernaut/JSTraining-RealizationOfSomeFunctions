'use strict';

/*

1. Написать функцию, которая вычисляет факториал задан-
ного числа.
*/
function factorial(base) {
    if(base == 0 || base == 1) {
        return 1;
    }
    if (base > 1) {
        return base = base * factorial(base - 1);
    }

    if(base < 0) {
        return "the number is negative";
    }

}

/*
2. Написать функцию, которая выводит все числа из заданного
пользователем диапазона в прямом порядке. И еще одну
функцию – для вывода в обратном порядке.
*/
function logRange(from, to){
if(from < to){
    console.log(from);
    logRange(from + 1, to);}}

function reverseLogRange(from, to){

if(from <= to){
    console.log(to);
    reverseLogRange(from, --to);
}

}

/*
3. Написать функцию, которая выводит переданное ей число
задом наперед.
Например: число 1234 вывести как 4321.
*/


//123465
function getNumberMirror(number) {

    if(number < 10){
        return number;
    }
    const lastDigit = number % 10;

    return Number(lastDigit.toString() + getNumberMirror( (number - lastDigit) / 10 ));

}

/*
4. Написать функцию, которая считает сумму цифр числа.
Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.
 */


function sumDigitsOfNumber (number) {

    if (number < 10) {
        return number;
    }
    const lastDigit = number % 10;
    return Number(lastDigit + sumDigitsOfNumber((number - lastDigit) / 10));
}

/*
5. Написать функцию, которая принимает число и выводит
соответствующее количество вложенных пар круглых скобок.
Например: число 4 – (((()))).
 */

    function brackets(n) {

        if(n=== 1) {
            return "()";

        }

        return `(${brackets(n - 1)})`;

    }



