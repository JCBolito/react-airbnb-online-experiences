const nums = [1, 2, 3, 4, 5];
const squared = nums.map(num => {
	return num ** 2;
});
// console.log(nums);
// console.log(squared);

const names = ["alice", "bob", "charlie", "danielle"];
const capitalized = names.map(name => {
	return name[0].toUpperCase() + name.slice(1);
});
// console.log(capitalized);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const ptag = pokemon.map(item => {
	return `<p>${item}</p>`;
});
console.log(ptag);