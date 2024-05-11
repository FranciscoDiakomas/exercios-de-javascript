
//alg de busca linear
function buscarlinear(chave, arr) {

        let tam = arr.length 
        let k = 0
        for (k ; k <= tam ; k++){
                
                if (arr[ k ] === chave) {
                        console.log(`Numero encotrado na posição ${k}`)
                        return true
                        
                } else {
                        console.log(`Numero n encotrado`)
                        return false
                }
        } 
}

let lista = [1,2,3,4,5,6,7,8,9,0]
let chave = 0
buscarlinear(chave, lista)