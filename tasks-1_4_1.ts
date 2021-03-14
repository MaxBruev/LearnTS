class Random {
    public min: number
    public max: number
    public n: number

    constructor(min:number, max:number, n:number) {
        this.min = min
        this.max = max
        this.n = n
    }

    protected outputRandom = ():number[] => {
        let arrRandom: number[] = []

        for (let i = 0; i < this.n; i++) {
            let random = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            arrRandom.push(random)
        }

        return arrRandom
     }
}

class Filter extends Random {

    filterArrRandom = () => {
        let arrRandom = this.outputRandom()
        let newArr:string[] = []

        arrRandom.forEach((item):void => {
            item < 0 ? newArr.push(`${item}?`) : newArr.push(`${item}`)
        })

        return newArr
    }
}

const filter = new Filter(-25,25, 10)
console.log(filter.filterArrRandom())
