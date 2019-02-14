// 1. Условные операторы. Если а – четное посчитать а*б, иначе а+б

function ifMultipleOrSum(a, b) {

    if (a % 2 == 0) {
        a *= b;
        console.log(a);
        return a;
    }
    else {
        a += b;
        console.log(a);
        return a;
    }
}

// 2. Условные операторы. Определить какой четверти принадлежит точка с координатами (х,у)

function getPointSectionDecart (x, y) {

    let quartam = 0;
    if (x == 0 || y == 0) {
        return((x == 0 && y == 0) ? 'Coordinate center' : 'axis ' + ((x == 0 ? 'Y' : 'X')));
    }

    else {
        if (x > 0 && y > 0){
            quartam = 1;
        }
        if (x < 0 && y > 0){
            quartam = 2;
        }
        if (x < 0 && y < 0){
            quartam = 3;
        }
        if (x > 0 && y < 0){
            quartam = 4;
        }
    }
    return quartam + ' quarter';
}

// 3. Условные операторы. Найти суммы только положительных из трех чисел

function ifSumPositiveOfNumber (a, b, c) {

    var sum = 0;

    if (a > 0) {
        sum = sum + a;
    }
    if (b > 0) {
        sum = sum + b;
    }
    if (c > 0) {
        sum = sum + c;
    }
    return sum;
}

// 4. Условные операторы. Посчитать выражение макс(а*б*с, а+б+с)+3

function getMaxExpression (a, b, c) {

    if (a * b * c >= a + b + c) {
        var result = a * b * c + 3;
        return result;
    }
    else {
        var result = (a + b + c) + 3;
        return result;
    }
}

// 5. Условные операторы. Написать программу определения оценки студента по его рейтингу

function rankStudent(studMark) {

    if (studMark >= 0 && studMark <= 19) {
        console.log("Оценка студента F");
        return 'F';
    }
    else if (studMark >= 20 && studMark <= 39) {
        console.log("Оценка студента E");
        return 'E';
    }
    else if (studMark >= 40 && studMark <= 59) {
        console.log("Оценка студента D");
        return 'D';
    }
    else if (studMark >= 60 && studMark <= 74) {
        console.log("Оценка студента C");
        return 'C';
    }
    else if (studMark >= 75 && studMark <= 89) {
        console.log("Оценка студента B");
        return 'B';
    }
    else if (studMark >= 90 && studMark <= 100) {
        console.log("Оценка студента A");
        return 'A';
    }
    else {
        console.log("Введены некорректные данные");
        throw new Error ('Error: rating student without of range');
    }
}

// 1. Циклы. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumOfEvenNumber1_99 () {

    var sum = 0, quantity = 0;
    for (var i = 0; i < 99; i++) {
        if (i % 2 == 0) {
            sum += i;
            quantity++;
        }
    }
    console.log('Сумма четных чисел в диапазоне от 1 до 99 ==> ', sum);
    console.log('Число четных чисел в диапазоне от 1 до 99 ==> ', quantity);
    return sum;
}

// 2. Циклы. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkPrimeNumber(n){
    let prost = true;
    for (let i = 2; i <= n / 2; i++)
    {
        if (n % i == 0)
        {
            prost = false;
            break;
        }
    }
    if (prost){
        return `${n} is prime number`;
    }
    else{
        return `${n} is composite number`;
    }
}

// 3. Циклы.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и
// метод бинарного поиска)

// Вариант последовательного подбора

function sqrtChecking (a) {

    var i = 1;
    while (i * i <= a) {
        i++;
    }
    return i - 1;
}

// Метод бинарного поиска
function sqrtBinSearch (a) {

    var i = a;

    while (i * i > a) {
        i /= 2;
    }
    while (i * i < a) {
        i++;
    }
    return Math.trunc(i);
}


// 4. Циклы. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}

// 5. Циклы.Посчитать сумму цифр заданного числа

function calcSumOfNumber (num) {

    var sum = 0, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    console.log(sum);
    return sum;
}

/* 6. Циклы. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321. */

 function getReverseNumber(number) {

    number = number.toString();
    var reverse = '';
    for (var i = number.length - 1; i >= 0; i--) {
        reverse += number.charAt(i);
    }
    return reverse;
}

// 1. Одномерные массивы. Найти минимальный элемент массива

function minElemOfMas (mas) {

    //var mas = [];
    //var iterator = masLenght - 1;
    var maxEl;
    var minEl;

    // for (i = 0; i <= iterator; i++) {
    //     var el = +prompt('Enter number: ', '');
    //     mas[i] = el;
    // }

    minEl = mas[0];
    maxEl = minEl;
    for (i = 0; i < mas.length; ++i) {
        if (mas[i] > maxEl) maxEl = mas[i];
        if (mas[i] < minEl) minEl = mas[i];
    }

    if(minEl === void 0) {
        return null;
    }

    console.log('Минимальный элемент массива - ' + mas + ' ==> ' + minEl);
    return minEl;
}

// 2. Одномерные массивы. Найти максимальный элемент массива

function getMaxArrayElement(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; ++i)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }

    }
    if(max === void 0) {
        return null;
    }
    return max;

}

// 3. Одномерные массивы. Найти индекс минимального элемента массива

function minIndexOfMas (mas) {

    //var mas = [];
    //var iterator = masLenght - 1;
    if(mas.length == 0) {
        return null;
    }
    var maxEl;
    var minEl;
    var minElIndex;

    // for (i = 0; i <= iterator; i++) {
    //     var el = +prompt('Enter number: ', '');
    //     mas[i] = el;
    // }

    var min = Math.min.apply(null, mas);
    console.log('Индекс минимального элемента массива -  ' + mas + ' ==> ' + mas.indexOf(min));
    return mas.indexOf(min);
}

// 4. Одномерные массивы. Найти индекс максимального элемента массива

function getMaxArrayElementIndex(arr){
    let max = arr[0];
    let maxIndex = 0;
    for(let i = 0; i < arr.length; ++i)
    {
        if(arr[i] > max)
        {
            max = arr[i];
            maxIndex = i;
        }
    }
    if(max === void 0) {
        return null;
    }
    return maxIndex;
}

// 5. Одномерные массивы. Посчитать сумму элементов массива с нечетными индексами

function calcSumElemOddOfMas (mas) {

    var sum = 0;

    if(mas.length == 0) {
        return null;
    }

    for (i = 0; i < mas.length; i++) {
        if (mas.indexOf(mas[i]) % 2 != 0) {
            sum += mas[i];
        }
    }

    console.log(sum);
    return sum;
}

// 6. Одномерные массивы. Сделать реверс массива (массив в обратном направлении)
function getReverseArray(arr) {
    revArr = [];
    var j = 0;

    for(let i = arr.length-1; i >= 0; i-- ) {
        revArr[j] = arr[i];
        j++;
    }

    return revArr;
}

// 7. Одномерные массивы. Посчитать количество нечетных элементов массива.

function quantityOddElemOfMas (mas) {

    if(mas.length == 0) {
        return null;
    }

    var sum = 0;

    for (i = 0; i < mas.length; i++) {
        if (i % 2 != 0 && i !=0) {
            sum++;
        }
    }

    console.log(sum);
    return sum;
}


// 8. Одномерные массивы. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4,
// результат 3 4 1 2

function getReplaceArrayParts (arr) {

    this.arr = arr;
    var firstArrPart = [];
    var secondArrPart = [];
    var resultedArr = [];

    for (i = 0; i < arr.length / 2; i++) {
        firstArrPart[i] = arr[i];
    }

    var masL = Math.floor(arr.length / 2);

    if (arr.length % 2 == 0) {
        for (i = masL, j = 0; i < arr.length; i++, j++) {

            secondArrPart[j] = arr[i];
        }
    } else {
        for (i = masL + 1, j = 0; i < arr.length; i++, j++) {

            secondArrPart[j] = arr[i];
        }
    }

    resultedArr = [...secondArrPart, ...firstArrPart];

    return resultedArr;
}


// 9. Одномерные массивы. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// bubble

function bubbleSorted (arr) {

    if(arr.length == 0) {
        return null;
    }

    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                var t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    }
    console.log(arr);
    return arr;
}

// SelectSort

function selectionSorted (arr) {

    if(arr.length == 0) {
        return null;
    }

    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min])
                min = j;
        }
        var t = arr[min];
        arr[min] = arr[i];
        arr[i] = t;
    }
    console.log(arr);
    return arr;
}

// InsertSort

function insertionSorted (arr) {

    if(arr.length == 0) {
        return null;
    }

    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var v = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = v;
    }
    console.log(arr);
    return arr;
}

// 10. Одномерные массивы. Отсортировать массив (Quick, Merge, Shell, Heap)
// quick

// Quick
function quickSorted (arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index;

    if (len > 1) {

        index = partition(arr, left, right);

        if (left < index - 1) {
            quickSorted(arr, left, index - 1);
        }

        if (index < right) {
            quickSorted(arr, index, right);
        }

    }
    return arr;

    function partition(arr, left, right) {
        let middle = Math.floor((right + left) / 2),
            pivot = arr[middle],
            i = left,
            j = right;

        while (i <= j) {


            while (arr[i] < pivot) {
                i++;
            }


            while (arr[j] > pivot) {
                j--;
            }


            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
                j--;
            }
        }

        return i;

    }
}

// Merge
function mergeSorted (arr) {
    if (arr.length < 2) {
        return arr;
    }
    else {
        var midpoint = parseInt(arr.length / 2);
        var leftArr = arr.slice(0, midpoint);
        var rightArr = arr.slice(midpoint, arr.length);
        return merge(mergeSorted(leftArr), mergeSorted(rightArr));
    }
    function merge(leftArr, rightArr) {
        var sortedArr = [];
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr[0]);
                leftArr = leftArr.slice(1)
            } else {
                sortedArr.push(rightArr[0]);
                rightArr = rightArr.slice(1)
            }
        }
        while (leftArr.length)
            sortedArr.push(leftArr.shift());
        while (rightArr.length)
            sortedArr.push(rightArr.shift());
        return sortedArr;
    }
}

// Shell
function shellSorted (arr) {

    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}

// Heap
function heapSort(input) {

    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;


        heap_root(input, 0);
    }

    var array_length;

    function heap_root(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;

        if (left < array_length && input[left] > input[max]) {
            max = left;
        }

        if (right < array_length && input[right] > input[max]) {
            max = right;
        }

        if (max != i) {
            swap(input, i, max);
            heap_root(input, max);
        }
    }

    function swap(input, index_A, index_B) {
        var temp = input[index_A];

        input[index_A] = input[index_B];
        input[index_B] = temp;
    }
}

// 1. Функции. Получить строковое название дня недели по номеру дня.

function dayOfNumber (dayNumber) {

    if (dayNumber < 1 || dayNumber > 7) {
        console.log("Задано неверное значение");
        return null;
    }
    switch (dayNumber) {
        case 1:
        return `Monday`;
        case 2:
        return `Tuesday`;
        case 3:
        return `Wednesday`;
        case 4:
        return `Thursday`;
        case 5:
        return `Friday`;
        case 6:
        return `Saturday`;
        case 7:
        return `Sunday`;
    }
    

}


// 2. Функции. Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function getDistOfPointDecart (x1, y1, x2, y2) {

    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a * a + b * b);

    return Number(c.toFixed(2));
}

// 3. Функции. Вводим число(0-999), получаем строку с прописью числа. Для задания 1 расширить диапазон до 999 миллиардов

 // * Возвращает сумму прописью

function numberToString (num) {

    //* Преобразует строку в массив
    function stringSplit (string, length) {

        var chunks, len, pos;
    
        string = (string == null) ? "" : string;
        length = (length == null) ? 1 : length;
    
        var chunks = [];
        var pos = 0;
        var len = string.length;
    
        while (pos < len) {
            chunks.push(string.slice(pos, pos += length));
        }
    
        return chunks;
    }

    //* Склоняем словоформу
    function morphology (number, titles) {
        var cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]];
    }

    var defTranslite = {
        null: 'ноль',
        a1: ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        a2: ['одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        a10: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
        a20: ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        a100: ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        uceloe: ['целая', 'целых', 'целых'],
        udesyatichnoe: ['десятая', 'десятых', 'десятых'],
        u3: ['тысяча', 'тысячи', 'тысяч'],
        u2: ['миллион', 'миллиона', 'миллионов'],
        u1: ['миллиард', 'миллиарда', 'миллиардов'],
    };

    var numOfChanks1, numOfChanks2, numOfChanks3, desyatichnoe, outTransliteNumber, celoe, numOfChanks, zeros,
        reference, referenceChanks, referenceChanksNumber, varMorfology;

    reference = parseFloat(num).toFixed(1).split('.'),
        celoe = reference[0],
        desyatichnoe = reference[1];

    var leadingZeros = 12 - celoe.length;

    if (leadingZeros < 0) {
        return false;
    }

    var zeros = [];

    while (leadingZeros--) {
        zeros.push('0');
    }

    celoe = zeros.join('') + celoe;

    var outTransliteNumber = [];

    if (celoe > 0) {

        // Разбиваем число по три символа
        referenceChanks = stringSplit(celoe, 3);

        for (var i = -1; i < referenceChanks.length; i++) {

            numOfChanks = referenceChanks[i];

            if (!(numOfChanks > 0)) {
                continue;
            }

            referenceChanksNumber = stringSplit(numOfChanks, 1),
                numOfChanks1 = parseInt(referenceChanksNumber[0]),
                numOfChanks2 = parseInt(referenceChanksNumber[1]),
                numOfChanks3 = parseInt(referenceChanksNumber[2]);

            outTransliteNumber.push(defTranslite.a100[numOfChanks1 - 1]); // 1xx-9xx

            if (i + 1 == 3) {
                varMorfology= 'a2';
            }

            else if (i+1 == 4) {
                varMorfology= 'a2';
            } else {
                varMorfology= 'a1';
            }

            if (numOfChanks2 > 1) {
                outTransliteNumber.push(defTranslite.a20[numOfChanks2 - 2] + (numOfChanks3 > 0 ? ' ' + defTranslite[varMorfology][numOfChanks3 - 1] : '')); // 20-99
            } else {
                outTransliteNumber.push(numOfChanks2 > 0 ? defTranslite.a10[numOfChanks3] : defTranslite[varMorfology][numOfChanks3 - 1]); // 10-19 | 1-9
            }

            if (referenceChanks.length > i + 1) {
                var name = defTranslite['u' + (i + 1)];
                outTransliteNumber.push(morphology(numOfChanks, name));
            }
        }
    } else {
        outTransliteNumber.push(defTranslite.null);
    }

    // Дописываем название "целые"
    outTransliteNumber.push(morphology(celoe, defTranslite.uceloe));

    // Дописываем название "десятые"
    outTransliteNumber.push(desyatichnoe + ' ' + morphology(desyatichnoe, defTranslite.udesyatichnoe));

    // Объединяем маcсив в строку, удаляем лишние пробелы и возвращаем результат
    return outTransliteNumber.join(' ').replace(RegExp(' {2,}', 'g'), ' ').trimLeft();
}


// 4. Функции. Вводим строку с прописью числа. число(0-999) получаем число(0-999). Для задания 1 расширить диапазон до 999 миллиардов

function stringToNubers(str){
    var numbers = calculate();

    function digitsSplit(writtenDigits){
        let arr = new Array;
        var parsArr = new Array;
        var x = 0;
        var flagNumberDigits = 0;
        arr = writtenDigits.split(" ");
        parsArr[0] = 0;
        var numbersDigits = ([["миллиард", "миллиарда", "миллиардов"],
            ["миллион", "миллиона", "миллионов"],
            ["тысяча", "тысячи", "тысяч"]]);
        for (let i = 0; i < arr.length; i++) {
            for(let j = 0; j < 3; j++){
                for (let k = 0; k < 3; k++){
                    if (arr[i] === numbersDigits[j][k]){
                        x++;

                        if (arr[i] === numbersDigits[0][k]){
                            flagNumberDigits = 1000000000;
                        }
                        if (arr[i] === numbersDigits[1][k]){
                            flagNumberDigits = 1000000;
                        }
                        if (arr[i] === numbersDigits[2][k]){
                            flagNumberDigits = 1000;
                        }
                        break;
                    }
                }
            }
            if (parsArr[x] == undefined)
            {
                parsArr[x-1] *= flagNumberDigits;
                parsArr[x] = 0;
            }
            parsArr[x] += checkString(arr[i]);

        }

        return parsArr;
    }

    function calculate(someArr = digitsSplit(str)){
        let sum = 0;
        for (let i = 0; i < someArr.length; i++) {
            sum+=someArr[i];
        }
        return sum;
    }

    function checkString(digit){
        let sDig = singleDigits(digit);
        let dDig10to19 = doubleDigits_10to19(digit);
        let dDig = doubleDigits(digit);
        let hDig = hundredDigits(digit);
        if (sDig != null) {
            return sDig;
        }
        else if (dDig10to19 != null) {
            return dDig10to19;
        }
        else if (dDig != null) {
            return dDig;
        }
        else if (hDig != null) {
            return hDig;
        }
        else
            return 0;
    }
    //Единицы
    function singleDigits(digit){
        switch (digit) {
            case ("один"):
                return (1);

            case ("одна"):
                return (1);

            case "два":
                return(2);

            case "две":
                return(2);

            case "три":
                return(3);

            case "четыре":
                return(4);

            case "пять":
                return(5);

            case "шесть":
                return(6);

            case "семь":
                return(7);

            case "восемь":
                return(8);

            case "девять":
                return(9);

            default:
                return null;
        }
    }
    //Числа от 10 до 19
    function doubleDigits_10to19(digit){
        switch (digit) {
            case "десять":
                return(10);

            case "одинадцать":
                return(11);

            case "двенадцать":
                return(12);

            case "тринадцать":
                return(13);

            case "четырнадцать":
                return(14);

            case "пятнадцать":
                return(15);

            case "шестнадцать":
                return(16);

            case "семнадцать":
                return(17);

            case "восемнадцать":
                return(18);

            case "девятнадцать":
                return(19);

            default:
                return null;
        }
    }
    //Числа от 20 до 90
    function doubleDigits(digit){
        switch (digit) {
            case "двадцать":
                return(20);

            case "тридцать":
                return(30);

            case "сорок":
                return(40);

            case "пятьдесят":
                return(50);

            case "шестьдесят":
                return(60);

            case "семьдесят":
                return(70);

            case "восемьдесят":
                return(80);

            case "девяносто":
                return(90);

            default:
                return null;
        }
    }
    //Сотни
    function hundredDigits(digit){
        switch (digit) {
            case "сто":
                return(100);

            case "двести":
                return(200);

            case "триста":
                return(300);

            case "четыреста":
                return(400);

            case "пятьсот":
                return(500);

            case "шестьсот":
                return(600);

            case "семьсот":
                return(700);

            case "восемьсот":
                return(800);

            case "девятьсот":
                return(900);

            default:
                return null;
        }
    }
    return numbers;
}

