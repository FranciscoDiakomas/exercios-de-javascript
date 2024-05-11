//tabuada
function Tabuada(num) {
        
        if (num === 0) {
                return 0
        }
        let inicio = 1
        let fim = 12
        while (fim >= inicio) {
                let res = `${num} X ${inicio} = ${num * inicio}`
                console.log(res)
                inicio++
        }
}

Tabuada(3)
