export class RandomNumber {
    outputRandom = (min:number, max:number, n:number): Array<number> => {
        let arrRandom: Array<number> = []

        for (let i = 0; i < n; i++) {
            let random = Math.floor(Math.random() * (max - min + 1)) + min;
            arrRandom.push(random)
        }

        return arrRandom
    }
}