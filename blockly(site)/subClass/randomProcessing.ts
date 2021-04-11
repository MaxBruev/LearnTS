/**
 * В этом файле присутствуют классы, которые получают массивы с рандомными
 * данными и обрабатывают их
 */

import {RandomNumber} from '../baseClass/randomNumbers'

/**
 * Функция возвращается экземпляр класса RandomNumber
 */
function EX_RandomNumber(): RandomNumber {
    return new RandomNumber()
}
/**
 * Функция возвращается массив с рандомными числами
 * в зависимости от установленного интервала и количества чисел
 */
function ArrayRandomNumbers(min: number, max: number, n: number):Array<number> {
    return EX_RandomNumber().outputRandom(min, max, n)
}


/**
 * Возвращает массив, где к отрицательными числам добавлен знак "?"
 */
class ArrQuestionMark {
    filterArrRandom(ArrRandom: Array<number>) {
        let newArr: Array<string> = []

        ArrRandom.forEach((item): void => {
            item < 0 ? newArr.push(`${item}?`) : newArr.push(`${item}`)
        })

        return newArr
    }
}


/**
 * Возвращает массив, где к числам кратным 3 добавлен знак "#"
 */
class ArrGrilleMark {
    filterArrRandom(ArrRandom: Array<number>) {
        let newArr: Array<string> = []

        ArrRandom.forEach((item): void => {
            item %3 === 0 && item !== 0 ? newArr.push(`${item}#`) : newArr.push(`${item}`)
        })

        return newArr
    }
}


/**
 * Возвращает количество положительных числе в массиве
 */
class PositiveCounter {
    counter(ArrRandom: Array<number>) {
        let quantityPositive: number = 0

        ArrRandom.forEach((item): void => {
            item > 0 ? quantityPositive++ : quantityPositive
        })

        return quantityPositive
    }
}

const newQuestionMark = new ArrQuestionMark()
const newGrilleMark = new ArrGrilleMark()
const newPositiveCounter = new PositiveCounter()

console.log(newQuestionMark.filterArrRandom(ArrayRandomNumbers(-25, 25, 10)));
console.log(newGrilleMark.filterArrRandom(ArrayRandomNumbers(-25, 25, 10)));
console.log(newPositiveCounter.counter(ArrayRandomNumbers(-25, 25, 10)))