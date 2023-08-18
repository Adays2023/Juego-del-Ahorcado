import { Keyboard } from "./components/Keyboard.js";
import { Panel } from "./components/Panel.js";
import {BodyParts} from "./components/Bodyparts.js";
import { Result } from "./components/ResultClass.js";
import {Pokemon} from "./api/pokemon-api.js";

const panel = new Panel();
const App = new Keyboard()
const imgs = new BodyParts()
const Start = new Result();
const pokemones = new Pokemon();

let conta = 6;
let contaimg = 1;
let punto = 60;

const Imge = document.getElementById('Poke');

async function recolecta(){
    
    const espera = await pokemones.obtenerDatosAwait();
    
    console.log(panel.choisePokemon(espera.name));
    
    const div = document.createElement('div');
    const img = document.createElement('img')
    img.classList='thePokemon'
    img.id = 'pokemonid'
    img.src = espera.sprites.other['official-artwork']['front_default']
    
     Imge.appendChild(img);
    
    const vectorLetras = App.createKeyboard()
    const linesPanel = panel.drawLines();
    
    const puntos = document.getElementById('puntos');
    const counter = document.getElementById('counter');
    const keyboard = document.getElementById('keyboard');
    const images = document.getElementById('imag');
    const ahorcado = document.getElementById('game')
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
        
        if(cambia){
            console.log('esta correcta');
            btn.classList = 'letter Correcta'
            punto = punto + 10;
            puntos.textContent = punto
        }
        else{
            btn.classList = 'letter Incorrecta'
            console.log('no esta correcta');
            punto = punto - 10;
            puntos.textContent = punto
        }
        
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

linesPanel.map(line =>{
    const div = document.createElement('div')
    const h3 = document.createElement('h3') 
    h3.textContent = 'font'
    div.classList = 'space'
    h3.textContent = line
    
    div.appendChild(h3);
    ahorcado.appendChild(div); 
}
)
}
recolecta()

//boton reinicio

const btnStart = document.getElementById('button');

btnStart.addEventListener('click', function() {
    location.reload();

})

//boton Pistas

 const btnPistas = document.querySelector('.button2');
 
 btnPistas.addEventListener('click', function() {
    const Imge = document.getElementById('pokemonid');
    Imge.classList='pokemon';
    punto = punto - 40;
    puntos.textContent = punto

let time = 5;
function actualizarPokemos(){
    btnPistas.textContent = time ;
    if(time <= 0){
        clearInterval(interval);
        Imge.classList = 'thePokemon'
        btnPistas.style.display = 'none'
    }
    time--;
}
actualizarPokemos();
const interval = setInterval(actualizarPokemos, 1000);

 })

//tiempo

const cronometroElemt = document.getElementById('cronometro');

let timeRemaining = 100;
function actualizarCronometro(){
    cronometroElemt.textContent = timeRemaining + 'segundos';
    if(timeRemaining <= 0){
        clearInterval(intervalo);
        document.getElementById('songSad').play();
        Swal.fire({
            title: '¡¡Sorry!!',
            text: '¡Your Time is over!😭 YOU LOST!',
            imageUrl: '../assets/images/pica llorando.gif',
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
