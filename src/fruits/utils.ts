import { fruits, Fruit } from "./fruits";

	// använd fruits-arrayen och returnera det fruit-objekt som matchar name
	// finns det ingen sådan fruit så returnera undefined
export const getFruit = (name: string): Fruit | undefined => {
	let matchingFruit: Fruit | undefined;
	fruits.forEach((fruit) => {
		if (!matchingFruit && fruit.name.toLowerCase() === name.toLowerCase()) {
		  matchingFruit = fruit;
		}
	});
	return matchingFruit;
};

// använd fruits-arrayen och returnera färgen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getColor = (name:string):string | undefined => {
	let matchingFruit: Fruit | undefined;
	fruits.forEach((fruit) => {
		if (!matchingFruit && fruit.name.toLowerCase() === name.toLowerCase()) {
			matchingFruit = fruit;
		}
	})
	if(matchingFruit){
		return matchingFruit.color;
	}
};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getIcon = (name:string):string | undefined => {
	let matchingFruit: Fruit | undefined;
	fruits.forEach((fruit) => {
		if (!matchingFruit && fruit.name.toLowerCase() === name.toLowerCase()) {
			matchingFruit = fruit;
		}
	})
	if (matchingFruit) {
		return matchingFruit.icon;
	}
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
export const getCategory = (name:string):string | undefined => {
	let matchingFruit: Fruit | undefined;
	fruits.forEach((fruit) => {
	if (!matchingFruit && fruit.name.toLowerCase() === name.toLowerCase()) {	
		matchingFruit = fruit;
	}
	})
	return matchingFruit?.category;
}

// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
// finns det inga frukter av den färgen så svara 0
export const numberOfColoredFruits = (color:string):number  => {
	return fruits.filter(
		(fruit) => fruit.color.toLowerCase() === color.toLowerCase()
	  ).length;
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

export const getFruitsByCategory = (category) => {
	// använd fruits-arrayen
	// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
};

// gör en getFruitsByColor också

export const getIconsByCategory = (category) => {
	// använd fruits-arrayen
	// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
};

// gör en getIconsByColor också

// gör en getCategories som returnerar en array av alla kategorier
// gör en getColors som returnerar en array av alla färger */
