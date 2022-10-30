//Iteración #4: Arrays
//1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log('Punto 1.1: ', avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";
console.log('Punto 1.2: ', avengers);

//1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log('Punto 1.3: ', avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
const lastItem = rickAndMortyCharacters.pop();
console.log('Punto 1.4: ', lastItem);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
const firstItem = rickAndMortyCharacters2.shift();
const lastItem2 = rickAndMortyCharacters2.pop();
console.log('Punto 1.5: ', firstItem, lastItem2);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1, 1);
console.log('Punto 1.6: ', rickAndMortyCharacters3);

