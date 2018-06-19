//creo una constante para guardar lo ingresado al input
const inputGif = document.querySelector("input")
//creo una constante para guardar el elemento
const containerGif = document.getElementById("gifs")
//le digo que ejecute un evento cuando se haga enter
inputGif.addEventListener("keypress", (event)=>{
    let key = event.which || event.keycode;
    if (key === 13){
        let gif = inputGif.value;
        inputGif.value = ""; //limpio del texto
        containerGif.innerHTML="";
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=AUmoy1PBNog1IN03XrnQmcy3Tc3OCwTu&q=${gif}&limit=25&offset=0&rating=G&lang=en`)
            .then(response => response.json())
            .then(data => {
                renderInfo(data);
            })
    }
})

const renderInfo = data =>{
    data.data.forEach(elements => {
    let gifsImage = elements.images.downsized.url;
    containerGif.innerHTML = `<img src="${gifsImage}">`;
    });
    
}
