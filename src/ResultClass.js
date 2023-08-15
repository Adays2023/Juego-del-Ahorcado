class Result{
    constructor(){
        this.message = "Iniciar...";
    }
    startResult(valor){
        if(valor === true){
            return this.message = '¡¡You Win!!'
        }
        else{
            return this.message = 'Ohh... You lost'
        }
    }
}

export {Result};