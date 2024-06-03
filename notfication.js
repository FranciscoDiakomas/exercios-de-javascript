window.onload = function () {
    
    Notification.requestPermission().then(()=>{
        new Notification("Ola mundo")
    })
}