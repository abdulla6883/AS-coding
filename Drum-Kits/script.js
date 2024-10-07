const eq =["crash","kick","snare","tom"];

const box = document.querySelector(".container");
 
eq.forEach((kit)=>{
    const btnE = document.createElement("button");
    btnE.classList.add("btn");
    btnE.innerText =kit;
    btnE.style.backgroundImage = "url(assests/" + kit + ".jpg)";
    box.appendChild(btnE);
    const audioEl = document.createElement("audio");
    audioEl.src = "assests/" + kit + ".mp3";
    box.appendChild(audioEl);
    btnE.addEventListener("click",()=>{
        audioEl.play();
    });
    window.addEventListener("keydown",(event)=>{
        if(event.key == kit.slice(0,1)) {
            audioEl.play();
            btnE.style.transform = "scale(.9)";
            setTimeout(()=>{
                btnE.style.transform = "scale(1)";
            },100);
        }
    });
});