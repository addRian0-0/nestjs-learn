export const pokemonsIds = [1, 2, 4, 6, 7, 75, 8];

interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const bulbasor: Pokemon = {
    id: 1,
    name: "Bulbasor",
    age: 23
}

export const charmander: Pokemon = {
    id: 2,
    name: "Charmander",
    age: 24
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander ,bulbasor);
console.log(pokemons);
