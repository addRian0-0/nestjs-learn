class NewPokemon {
    constructor (
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`AAAAAAAAAAAgh!!`);
    }

    speak(){
        console.log(`No quiero hablar!`);
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {

    constructor (
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!`);
    }

    speak(){
        console.log(`${this.name} ${this.name}!`);
    }

}

export const charmander = new NewPokemon(4, "Charmander");
charmander.scream();
charmander.speak();