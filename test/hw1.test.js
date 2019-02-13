// 1. Условные операторы. Если а – четное посчитать а*б, иначе а+б

describe('ifMultipleOrSum', function () {

    it('should return a + b', function () {
        const a = 1;
        const b = 2;
        const expected = 3;

        const actual = ifMultipleOrSum(a, b);

        assert.equal(actual, expected);
    });

    it('should return a * b', function () {
        const a = 2;
        const b = 3;
        const expected = 6;

        const actual = ifMultipleOrSum(a, b);

        assert.equal(actual, expected);
    });
});


// 3. Условные операторы. Найти суммы только положительных из трех чисел

describe('ifSumPositiveOfNumber', function () {
    describe('returns sum of positive numbers', function () {
        const testData = [{
                a: 1,
                b: -1,
                c: 0,
                expected: 1
            },
            {
                a: 2,
                b: -2,
                c: 1,
                expected: 3
            },
            {
                a: 5,
                b: 2,
                c: 0,
                expected: 7
            },
            {
                a: -1,
                b: -1,
                c: 2,
                expected: 2
            },
        ];

        testData.forEach(function (params) {
            const {
                a,
                b,
                c,
                expected
            } = params;

            it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, function () {
                const actual = ifSumPositiveOfNumber(a, b, c);

                assert.strictEqual(actual, expected);
            });

        });
    });
});

// 5. Условные операторы. Написать программу определения оценки студента по его рейтингу

describe('rankStudent', function () {
    describe('returns student mark by his rating', function () {
        const testData = [{
                rating: 0,
                expected: 'F'
            },
            {
                rating: 1,
                expected: 'F'
            },
            {
                rating: 10,
                expected: 'F'
            },
            {
                rating: 18,
                expected: 'F'
            },
            {
                rating: 19,
                expected: 'F'
            },
            {
                rating: 20,
                expected: 'E'
            },
            {
                rating: 25,
                expected: 'E'
            },
            {
                rating: 29,
                expected: 'E'
            },
            {
                rating: 30,
                expected: 'E'
            },
            {
                rating: 39,
                expected: 'E'
            },
            {
                rating: 40,
                expected: 'D'
            },
            {
                rating: 49,
                expected: 'D'
            },
            {
                rating: 50,
                expected: 'D'
            },
            {
                rating: 59,
                expected: 'D'
            },
            {
                rating: 60,
                expected: 'C'
            },
            {
                rating: 64,
                expected: 'C'
            },
            {
                rating: 70,
                expected: 'C'
            },
            {
                rating: 74,
                expected: 'C'
            },
            {
                rating: 75,
                expected: 'B'
            },
            {
                rating: 79,
                expected: 'B'
            },
            {
                rating: 80,
                expected: 'B'
            },
            {
                rating: 89,
                expected: 'B'
            },
            {
                rating: 90,
                expected: 'A'
            },
            {
                rating: 96,
                expected: 'A'
            },
            {
                rating: 100,
                expected: 'A'
            }

        ];

        testData.forEach(function (params) {
            const {
                rating,
                expected
            } = params;

            it(`should return ${expected} when rating is ${rating}`, function () {

                const actual = rankStudent(rating);

                assert.strictEqual(actual, expected);
            });
        });
    });
    describe(`throw Error with rating student without of range`, function () {
        const testData = [-1, -100, 101, 202];

        testData.forEach(function (rating) {
            it(`should throw Error when rating is ${rating}`, function () {
                assert.throw(function () {
                    rankStudent(rating);
                }, 'Error: rating student without of range');
            });
        });
    });

});

// 1. Циклы. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

describe(`sumOfEvenNumber1_99`, function () {
    describe(`returns sum of even numbers with range between 1 to 99`, function () {
        const testData = [{
            sum: 2450,
            quantity: 50
        }];

        testData.forEach(function (data) {
            const {
                sum,
                quantity
            } = data;
            it(`should return sum = ${sum} when quantity = ${quantity}`, function () {
                const actual = sumOfEvenNumber1_99();

                assert.equal(actual, sum);
            });
        });
    });
});

// 3. Циклы.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и
// метод бинарного поиска)

// Вариант последовательного подбора

describe(`sqrtChecking`, function () {
    describe(`find the root of a natural number ==> sequential selection`, function () {
        const testData = [{
                a: 0,
                expected: 0
            },
            {
                a: 1,
                expected: 1
            },
            {
                a: 4,
                expected: 2
            },
            {
                a: 9,
                expected: 3
            },
            {
                a: 16,
                expected: 4
            },
            {
                a: 81,
                expected: 9
            },
            {
                a: 121,
                expected: 11
            }
        ];

        testData.forEach(function (params) {
            const {
                a,
                expected
            } = params;

            it(`should return sqrt = ${expected} when number = ${a}`, function () {
                const actual = sqrtChecking(a);

                assert.strictEqual(actual, expected);
            });
        });
    });
    // метод бинарного поиска ... 
    describe(`find the root of a natural number ==> binary search`, function () {
        const testData = [{
                a: 0,
                expected: 0
            },
            {
                a: 1,
                expected: 1
            },
            {
                a: 4,
                expected: 2
            },
            {
                a: 9,
                expected: 3
            },
            {
                a: 16,
                expected: 4
            },
            {
                a: 81,
                expected: 9
            },
            {
                a: 121,
                expected: 11
            }
        ];

        testData.forEach(function (params) {
            const {
                a,
                expected
            } = params;

            it(`should return sqrt = ${expected} when number = ${a}`, function () {
                const actual = sqrtBinSearch(a);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 5. Циклы.Посчитать сумму цифр заданного числа

describe(`calcSumOfNumber`, function () {
    const testData = [{
            a: 123,
            expected: 6
        },
        {
            a: 777,
            expected: 21
        },
        {
            a: 1234,
            expected: 10
        },
        {
            a: 123455,
            expected: 20
        },
        {
            a: 9999999,
            expected: 63
        }
    ];

    testData.forEach(function (params) {
        const {
            a,
            expected
        } = params;

        it(`should return sum = ${expected} when number ==> ${a}`, function () {
            const actual = calcSumOfNumber(a);
            assert.strictEqual(actual, expected);
        });
    });
});


// 1. Одномерные массивы. Найти минимальный элемент массива


describe('minElemOfMas', function () {
    describe('returns min element from array', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 1
            },
            {
                array: [3, 2],
                expected: 2
            },
            {
                array: [3, 2, 7, 0, 6, 33],
                expected: 0
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = minElemOfMas(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 3. Одномерные массивы. Найти индекс минимального элемента массива

describe(`minIndexOfMas`, function () {
    describe('returns min index of element from array', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 0
            },
            {
                array: [3, 2],
                expected: 1
            },
            {
                array: [3, 2, 7, 0, 6, 33],
                expected: 3
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = minIndexOfMas(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 5. Одномерные массивы. Посчитать сумму элементов массива с нечетными индексами

describe(`calcSumElemOddOfMas`, function () {
    describe('returns sum of element array with odd index', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 0
            },
            {
                array: [3, 2],
                expected: 2
            },
            {
                array: [3, 2, 7, 0, 6, 33],
                expected: 35
            },
            {
                array: [3, 2, 7, 0, 6, 33, 77, -11],
                expected: 24
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sum of el with odd index ${expected} if array is ${array}`, function () {
                const actual = calcSumElemOddOfMas(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 7. Одномерные массивы. Посчитать количество нечетных элементов массива.

describe(`quantityOddElemOfMas`, function () {
    describe('returns quantity of element array with odd index', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 0
            },
            {
                array: [3, 2],
                expected: 1
            },
            {
                array: [3, 2, 7, 0, 6, 33],
                expected: 3
            },
            {
                array: [3, 2, 7, 0, 6, 33, 77, -11],
                expected: 4
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return quantity of element with odd index ${expected} if array is ${array}`, function () {
                const actual = quantityOddElemOfMas(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 9. Одномерные массивы. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// bubble

describe(`Sorting Array`, function () {
    describe('returns sorted array (Bubble sorting)', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [3, 2],
                expected: [2, 3]
            },
            {
                array: [3, 2, 7, 0, 6, 33],
                expected: [0, 2, 3, 6, 7, 33]
            },
            {
                array: [3, 2, 7, 0, 6, 33, 77, -11],
                expected: [-11, 0, 2, 3, 6, 7, 33, 77]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sorted array ${expected} if array is ${array}`, function () {
                const actual = bubbleSorted(array);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('returns sorted array (Selection sorting)', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [3, 2],
                expected: [2, 3]
            },
            {
                array: [3, 2, 7, 0, 6, 33],
                expected: [0, 2, 3, 6, 7, 33]
            },
            {
                array: [3, 2, 7, 0, 6, 33, 77, -11],
                expected: [-11, 0, 2, 3, 6, 7, 33, 77]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sorted array ${expected} if array is ${array}`, function () {
                const actual = selectionSorted(array);

                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('returns sorted array (Insertion sorting)', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [3, 2],
                expected: [2, 3]
            },
            {
                array: [3, 2, 7, 0, 6, 33],
                expected: [0, 2, 3, 6, 7, 33]
            },
            {
                array: [3, 2, 7, 0, 6, 33, 77, -11],
                expected: [-11, 0, 2, 3, 6, 7, 33, 77]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sorted array ${expected} if array is ${array}`, function () {
                const actual = insertionSorted(array);

                assert.deepEqual(actual, expected);
            });
        });
    });
});

// 1. Функции. Получить строковое название дня недели по номеру дня.

describe(`dayOfNumber`, function () {
    describe(`return day of week with number`, function () {
        const testData = [{
                dayNumber: 1,
                expected: 'Monday'
            },
            {
                dayNumber: 2,
                expected: 'Tuesday'
            },
            {
                dayNumber: 3,
                expected: `Wednesday`
            },
            {
                dayNumber: 4,
                expected: 'Thursday'
            },
            {
                dayNumber: 5,
                expected: 'Friday'
            },
            {
                dayNumber: 6,
                expected: 'Saturday'
            },
            {
                dayNumber: 7,
                expected: 'Sunday'
            },
            {
                dayNumber: 8,
                expected: null
            },
            {
                dayNumber: 0,
                expected: null
            }
        ];

        testData.forEach(function (data) {
            const {
                dayNumber,
                expected
            } = data;

            it(`should return ${expected} when day number of week is ${dayNumber}`, function () {
                const actual = dayOfNumber(dayNumber);

                assert.equal(expected, actual);
            });
        });

    });
});


// 3. Функции. Вводим число(0-999), получаем строку с прописью числа. Для задания 1 расширить диапазон до 999 миллиардов

describe(`numberToString`, function () {
    describe(`return convert number to string`, function () {
        const testData = [
            {
            num: 0,
            expected: `ноль целых 0 десятых`
            },
            {
            num: 0.3,
            expected: `ноль целых 3 десятых`
            },
            {
            num: 0.9,
            expected: `ноль целых 9 десятых`
            },
            {
            num: 1,
            expected: `одна целая 0 десятых`
            },
            {
            num: 1.3,
            expected: `одна целая 3 десятых`
            }, 
            {
            num: 1.1,
            expected: `одна целая 1 десятая`
            },
            {
            num: 1.0,
            expected: `одна целая 0 десятых`
            },
            {
            num: 11,
            expected: `одиннадцать целых 0 десятых`
            },
            {
            num: 11.3,
            expected: `одиннадцать целых 3 десятых`
            }, 
            {
            num: 11.1,
            expected: `одиннадцать целых 1 десятая`
            },
            {
            num: 1234567890.0,
            expected: `один миллиард двести тридцать четыре миллиона пятьсот шестьдесят семь тысяч восемьсот девяносто целых 0 десятых`
            },
             {
            num: 2345678920.1,
            expected: `два миллиарда триста сорок пять миллионов шестьсот семьдесят восемь тысяч девятьсот двадцать целых 1 десятая`
            },
            {
            num: 3456789111.9,
            expected: `три миллиарда четыреста пятьдесят шесть миллионов семьсот восемьдесят девять тысяч сто одиннадцать целых 9 десятых`
            }, 
            {
            num: 5001002012.1,
            expected: `пять миллиардов один миллион две тысячи двенадцать целых 1 десятая`
            },
            {
            num: 13014015.2,
            expected: `тринадцать миллионов четырнадцать тысяч пятнадцать целых 2 десятых`
            },
            {
            num: 15000016017.0,
            expected: `пятнадцать миллиардов шестнадцать тысяч семнадцать целых 0 десятых`
            },
            {
            num: 17019000000.8,
            expected: `семнадцать миллиардов девятнадцать миллионов целых 8 десятых`
            },
            {
            num: 1000.5,
            expected: `одна тысяча целых 5 десятых`
            }
        ];

        testData.forEach(function (data) {
            const { num, expected } = data;

            it(`should return convert string = ${expected} of number ${num.toFixed(1)}`, function () {
                const actual = numberToString(num);
                assert.equal(expected, actual);
            });
        });
    });
});

