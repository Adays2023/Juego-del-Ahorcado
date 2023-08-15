import { Keyboard } from "./Keyboard.js";
import { Panel } from "./panel.js";
import {BodyParts} from "./Bodyparts.js";
import { Result } from "./ResultClass.js";


const panel = new Panel();
const App = new Keyboard()
const imgs = new BodyParts()
const Start = new Result();

panel.choiseWords();
const linesPanel = panel.drawLines();

let conta = 6;
let contaimg = 1;

const vectorLetras = App.createKeyboard()


const counter = document.getElementById('counter');
const keyboard = document.getElementById('keyboard');
const images = document.getElementById('imag');
const contenedorLetras=document.createElement("div");
contenedorLetras.id="noun"

vectorLetras.map(key => {
    const btn = document.createElement('button')
    btn.textContent = key
    btn.classList ='letter';
    btn.addEventListener("click",evento=>{
        
        const letter=evento.target.textContent;
        console.log(letter);
        panel.showCorrect(letter.toLowerCase());
        const cambia = panel.ifisTrue(letter.toLowerCase());
        console.log(cambia);
        

        const start2 = Start.startResult(false)
         console.log(start2);

        if (!cambia) {
            conta--;
            counter.textContent = conta;
            images.src = imgs.Body(contaimg)
            contaimg++;
        }
        ahorcado.textContent = ''
        if (conta == 0){
            document.getElementById('songSad').play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Sorry!😭 YOU LOST!',
                footer: '<a href="">Do you want to try again?</a>'
              })
            
        }
        linesPanel.map(line =>{
            const div = document.createElement('div')
            const h3 = document.createElement('h3') 
            h3.textContent = 'font'
            div.classList = 'space'
            h3.textContent = line
        
            div.appendChild(h3);
            ahorcado.appendChild(div);
        })
       
    })
    contenedorLetras.appendChild(btn)


})
keyboard.appendChild(contenedorLetras)

const ahorcado = document.getElementById('game')

linesPanel.map(line =>{
    const div = document.createElement('div')
    const h3 = document.createElement('h3') 
    h3.textContent = 'font'
    div.classList = 'space'
    h3.textContent = line

    div.appendChild(h3);
    ahorcado.appendChild(div);
})

//boton reinicio

const btnStart = document.getElementById('button');

btnStart.addEventListener('click', function() {
    location.reload();

})

//tiempo

const cronometroElemt = document.getElementById('cronometro');

let timeRemaining = 60;
function actualizarCronometro(){
    cronometroElemt.textContent = timeRemaining + 'segundos';
    if(timeRemaining <= 0){
        clearInterval(intervalo);
        document.getElementById('songSad').play();
        Swal.fire({
            title: '¡¡Sorry!!',
            text: '¡Your Time is over!😭 YOU LOST!',
            imageUrl: '../assets/images/Cry Floor Sticker - Cry Floor Anime - Discover & Share GIFs.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
            footer: '<a href="">Do you want to try again?</a>'
          })
    }
    timeRemaining--;
}
actualizarCronometro();
const intervalo = setInterval(actualizarCronometro, 1000);
