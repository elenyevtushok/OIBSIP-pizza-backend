

export interface IPizza {
	_id: string;
	name: string;
	description: string;
	ingredients: string[];
	sizes: IPizzaSize[];
	imageUrls: string[];
}

export interface IPizzaSize {
	size: string,
	price: number,
	weight: number,
}

// export interface UserCreateDto {
// 	name: string,
// 	username: string,
// 	email: string,
// }
