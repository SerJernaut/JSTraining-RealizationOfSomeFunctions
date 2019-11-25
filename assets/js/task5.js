'use strict';

let str1 = "sometext";
let str2 = "sdkseowkffe4";
let sentence = "Some sentence with a lot of words";

/*
1. Написать функцию, которая принимает 2 строки и срав-
нивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во вто-
рой больше символов, чем в первой; или 0 – если строки
одинаковой длины.
*/

function compareStringsLength(str1,str2) {

    if (str1.length > str2.length) {
        return 1;
    }
    else if (str1.length === str2.length) {
        return 0;
    }
    else {
        return -1;
    }

}



/*
2. Написать функцию, которая переводит в верхний регистр
первый символ переданной строки.
*/

function upperCaseFirstChar(str) {

    const arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

/*
3. Написать функцию, которая считает количество гласных
букв в переданной строке.
*/

/*
4. Написать функцию для проверки спама в переданной
строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова: 100% бесплатно,
увеличение продаж, только сегодня, не удаляйте, ххх.
Функция должна быть нечувствительна к регистру.
*/

function spam(str) {
    if (str.toLowerCase().includes("100% бесплатно") || str.toLowerCase().includes("увеличение продаж") || str.toLowerCase().includes("только сегодня") || str.toLowerCase().includes("не удаляйте") || str.toLowerCase().includes("ххх")) {
        return false;
    }
    else {
        return true;
    }
    }

/*
5. Написать функцию сокращения строки. Функция прини-
мает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...”.
*/

function reductionStr (str, strLength){
    if (str.length < strLength) {
            return str;
}
    else {
        const arr = str.split("");
        arr.length = strLength;
        arr[arr.length-1] = ".";
        arr[arr.length-2] = ".";
        arr[arr.length-3] = ".";
        return arr.join("");
    }
}
/*
6. Написать функцию, которая проверяет, является ли пере-
данная строка палиндромом.
*/
function palindrome(str) {
    return str.toString().toLowerCase() === str.toString().toLowerCase().split("").reverse().join("");
}

/*
7. Написать функцию, которая считает количество слов в
предложении.
*/
function countWordsAtSentence(str) {
    return str.split(" ").length;
}



/*
8. Написать функцию, которая возвращает самое длинное
слово из предложения.
*/
function theBiggestWordAtSentence(str) {
    const arr = str.split(" ");
    let lengthOfWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lengthOfWord) {
            lengthOfWord = arr[i].length;
        }
    }
    return lengthOfWord;
   }

/*
9. Написать функцию, которая считает среднюю длину слова
в предложении.
*/

function averageWordsLengthAtSentence(str) {
    const arr = str.split(" ");
    let sumLengthOfWords = 0;
    for (let i = 0; i < arr.length; i++) {
        sumLengthOfWords+=arr[i].length;
    }
    return sumLengthOfWords/arr.length;
}

/*
10. Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке.
*/




