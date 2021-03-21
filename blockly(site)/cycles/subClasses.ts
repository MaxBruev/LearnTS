import {RandomNumber} from './randomClass'

class ArrQuestionMark {
    filterArrRandom(min: number, max: number, n: number) {
        const randomNumber = new RandomNumber

        let arrRandom: Array<number> = randomNumber.outputRandom(min, max, n)
        let newArr: Array<string> = []

        arrRandom.forEach((item): void => {
            item < 0 ? newArr.push(`${item}?`) : newArr.push(`${item}`)
        })

        return newArr
    }
}

class ArrGrilleMark {
    filterArrRandom(min: number, max: number, n: number) {
        const randomNumber = new RandomNumber

        let arrRandom: Array<number> = randomNumber.outputRandom(min, max, n)
        let newArr: Array<string> = []

        arrRandom.forEach((item): void => {
            item %3 === 0 ? newArr.push(`${item}#`) : newArr.push(`${item}`)
        })

        return newArr
    }
}

class PositiveCounter {
    counter(min: number, max: number, n: number) {
        const randomNumber = new RandomNumber

        let arrRandom: Array<number> = randomNumber.outputRandom(min, max, n)
        let quantityPositive: number = 0

        arrRandom.forEach((item): void => {
            item > 0 ? quantityPositive++ : quantityPositive
        })

        return {
            arrRandom,
            quantityPositive
        }
    }
}

class BigSumNumeral {
    bigSum(min: number, max: number, n: number) {
        const randomNumber = new RandomNumber
        let arrRandom: Array<number> = randomNumber.outputRandom(min, max, n)
        let sumNumeral: Array<number> = []

        arrRandom.forEach((item) => {
            let currentSum = 0
            let currentNumeral = String(item)

            for (let i = 0; i < currentNumeral.length; i++) {
                currentSum += +currentNumeral[i]
            }
            sumNumeral.push(currentSum)
        })

        let bigSumNumeral = Math.max.apply(Math,sumNumeral)

        return {arrRandom, bigSumNumeral}
    }
}

const newQuestionMark = new ArrQuestionMark()
const newGrilleMark = new ArrGrilleMark()
const newPositiveCounter = new PositiveCounter()
const newBigSumNumeral = new BigSumNumeral()

// console.log(newQuestionMark.filterArrRandom(-25, 25, 10));
// console.log(newGrilleMark.filterArrRandom(5, 50, 8));
// console.log(newPositiveCounter.counter(-5,5,5))
console.log(newBigSumNumeral.bigSum(100,999,8))