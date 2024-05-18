//equacao do segundo grau

function Equacao(a,b,c) {
        
        let delta = (b * 2) - (4 * a * c)
        let status = ''
        let status2 = ''
        if (delta < 0) {
                status2 = 'As Raizes não existem'
                
        } else if(delta == 0) {
                 status2 = 'As Raizes existem e são iguais'
        }
        else {
                status2 = 'As raizes são existente e diferentes' 
        }
        let x1 , x2
        try {
                x1 = (-b + (Math.sqrt(delta))) / (a * 2) 
                x2 = (-b - (Math.sqrt(delta))) / (a * 2) 
                status = `Delta: ${delta} \n X1 : ${x1} \n X2:  ${x2} \n `
                console.log(`${status} \n ${status2}`)
                return true

                
        } catch (error) {
                console.log('error :',error)
        }
        

}

Equacao(2,1,1)