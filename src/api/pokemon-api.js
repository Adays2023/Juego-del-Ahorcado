class Pokemon{
    constructor(){
        this.id = 7;
        this.vect = {};
        this.nombrePokemon = '';
    }

    async obtenerDatosAwait(){

        this.id = Math.floor(Math.random() * (400 - 0), 0)

        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${this.id}`
       try {
         const response = await fetch(apiUrl);
         if (!response.ok){
            throw new Error("No se pudo obtener la informacion...");
         }
         const data = await response.json();
         return data;
       } catch (error) {
            console.log("Error al obtener los datos", error);
       }
        
    }

}

export {Pokemon};

