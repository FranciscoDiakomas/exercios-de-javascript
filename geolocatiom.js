window.onload = function () {

        try {
            let localizacao = navigator.geolocation.getCurrentPosition()
            let latitude = localizacao.coors.latitude
            let logintude = localizacao.coors.logintude
            let position = {
                latitude :latitude,
                logintude : logintude
            }
            console.table(position)
            
        } catch (error) {
            console.log("Error")
        }
}