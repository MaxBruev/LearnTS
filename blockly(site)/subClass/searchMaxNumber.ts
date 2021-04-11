/**
 * В этом файле приведен пример фильтрации массива
 * (за основу взят массив с рандомными числами)
 */

import {RandomNumber} from '../baseClass/randomNumbers'

interface IFilterMaxNumber {
    getMaxNumber(ArrayRandom: Array<number>): string // принимает массив рандомных чисел
}

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
 * В данном классе есть метод, который возвращает
 * "Наибольшее число оканчивающееся на 2"
 */
class FilterMaxNumber implements IFilterMaxNumber{
     getMaxNumber(ArrayRandom: Array<number>): string {
        return searchMaxNumber(ArrayRandom)
     }
}

/**
 * Функция в которой происходит вся магия.
 *
 */
function searchMaxNumber(ArrayRandom: Array<number>): string {
    const newArray:Array<number> = []
    let result: string

    ArrayRandom.forEach((item:number) => {
        const newItem:string = item.toString().slice(-1)

        Number(newItem) === 2 ? newArray.push(item) : null

    })

    if (newArray.length !== 0) {
        result = `Наибольшее число оканчивающееся на 2: ${Math.max(...newArray)}`
    } else {
        result = `Наибольшее число оканчивающееся на 2: нет`
    }

    return result
}

const newFilterMaxNumber = new FilterMaxNumber().getMaxNumber(ArrayRandomNumbers(20, 50,30))
console.log(newFilterMaxNumber)