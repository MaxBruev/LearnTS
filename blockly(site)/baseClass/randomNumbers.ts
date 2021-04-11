interface IRandomNumber {
    outputRandom(min:number, max:number, n:number): Array<number> // принимает максимальное(max), минимальное(min) значения и количество(n) рандомных чисел
}

/**
 * Класс, который содержит функцию возвращающую
 * массив с рандомными числами в заданном диапазоне
 */

export class RandomNumber implements IRandomNumber{
 outputRandom(min: number, max: number, n: number): Array<number> {
     return random(min, max, n)
 }
}

function random(min:number, max:number, n:number): Array<number> {
    let arrRandom: Array<number> = []

    for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arrRandom.push(random)
    }

    return arrRandom
}