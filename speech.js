window.onload = function () {
    
    const btn = document.getElementById("btn")
    btn.addEventListener("click",()=>{
        const texto = document.getElementById("texto").value
        if(!texto){
            window.alert("O texto esta Vazio")
        }else{
            try {
                const Fala = new SpeechSynthesis(texto)
                window.speechSynthesis.speak(Fala)
            } catch (error) {
                console.lor(error)
            }
            
        }
    })
}