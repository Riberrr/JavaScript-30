window.addEventListener('keydown', (e) => {
    let key = document.querySelector('audio[data-key="'+ e.keyCode +'"]')
    if(key !== null){
        key.play();
        key.className = "key active"; 
    }else{};
});
window.addEventListener('keyup', (e) => {
    let key = document.querySelector('audio[data-key="'+ e.keyCode +'"]')
    if(key !== null){
        key.play();
        key.className = "key"; 
    }else{};
})