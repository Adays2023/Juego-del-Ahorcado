class Panel{
    constructor(){
         this.choiseWord = ['perro','gato','conejo','loro','serpiente','elefante','burro'];
         this.lastLetter = '';
         this.VectAnswer = [];
         this.VectAnswers = [];
         this.idchoise = 0;
    }
    choiseWords(){
        this.idchoise = Math.floor(Math.random() * (this.choiseWord.length - 0) + 0)
        return this.idchoise
    }

    drawLines(){
        this.VectAnswer = Array.from(this.choiseWord[this.idchoise])
        console.log(this.VectAnswer);

        for (let index = 0; index < this.VectAnswer.length; index++) {
            this.VectAnswers[index] = '_';
        }
        return this.VectAnswers;
    }

    showCorrect(letter){
        this.VectAnswer.map((word, index)=>{
            console.log(word);
            if(word == letter || word == letter.toLowerCase()){
                this.VectAnswers[index] = letter
            }
        })
        return this.VectAnswers
    }

    ifisTrue(letter){
        for (let index = 0; index < this.VectAnswer.length; index++) {
            if(this.VectAnswer[index] == letter || this.VectAnswer[index] == letter.toLowerCase()){
                return true;
            }
            
        }
       
    }

}

export {Panel};
 
