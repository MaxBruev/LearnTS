import {RandomNumber} from '../globalClasses-1.4.1/globalClasses-1_4_1'

class ArrQuestionMark {
    filterArrRandom = (min: number, max: number, n: number) => {
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
    filterArrRandom = (min: number, max: number, n: number) => {
        const randomNumber = new RandomNumber

        let arrRandom: Array<number> = randomNumber.outputRandom(min, max, n)
        let newArr: Array<string> = []

        arrRandom.forEach((item): void => {
            item %3 === 0 ? newArr.push(`${item}#`) : newArr.push(`${item}`)
        })

        return newArr
    }
}

const newQuestionMark = new ArrQuestionMark()
const newGrilleMark = new ArrGrilleMark()

console.log(newQuestionMark.filterArrRandom(-25, 25, 10));
console.log(newGrilleMark.filterArrRandom(5, 50, 8));