//calcular a média de um aluno

function Media(notas, nome) {
        
        if (!nome) {
                return 'error'
        } else {
                
                let somatorio = 0
                for (let k = 0; k <= notas.length - 1; k++) {
                        somatorio += notas[ k ]
                }
                let media = somatorio / notas.length
                let status = ''
                if (media < 10) {
                        
                        status = `O aluno ${nome}, esta reprovado ${media}`
                } else {
                        status = `O aluno ${nome}, esta aprovado ${media}`
                }

                return status

        }
}

console.log(Media([10,1,10], 'pedro'))