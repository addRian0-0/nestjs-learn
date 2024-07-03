import axios from "axios";
import { PokeAPIResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {

    get imageUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`;
    }
    //ejecuta cuando se crea una instancia de la clase
    constructor(
        public readonly id: number, 
        public name: string,
        //public imageUrl: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}`);
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves: Promise<Move[]>(){
        const { data } = await axios.get<PokeAPIResponse>("https://pokeapi.co/api/v2/pokemon/ditto");
        // console.log(data.moves[0].move.name);
        return data.moves;
    }
}

export const charmander = new Pokemon(5, "Charmander");
// console.log(charmander.imageUrl);
// charmander.speak();
// charmander.scream();
// console.log(charmander.getMoves());
charmander.getMoves();