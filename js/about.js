let i=0;
let speed = 100;
const text = "About Me";

const writeText = () =>{
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(writeText,speed);
    }
}

const fadeIn = () => {
    document.getElementById('img').style.marginTop = "5vh";
    document.getElementById('img').style.opacity = 1;
    document.getElementById('p').style.opacity = 1;
}

writeText();
fadeIn()