// import IIngredient from "../types/ingredientInterface";

// export const STUB_INGREDIENTS_SEARCH: IIngredient[] = [
// 	{
// 		"_id": "31",
// 		"name": "Tomato sauce",
// 		"category": "sauces",
// 		"description": "Simple tomato sauce from fresh tomatos",
// 		"price": 2,
// 		"imageUrls": ["https://unsplash.com/photos/FzB_512zvP0"]
// 	},
// 	{
// 		"_id": "32",
// 		"name": "Creamy white sauce",
// 		"category": "sauces",
// 		"description": "Delicious sauce from fresh cream",
// 		"price": 2,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "33",
// 		"name": "Cashew sauce",
// 		"category": "sauces",
// 		"description": "Amazing vegan option of creamy sauce",
// 		"price": 2,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "34",
// 		"name": "Pesto sauce",
// 		"category": "sauces",
// 		"description": "Fresh hand-made pesto",
// 		"price": 2,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "35",
// 		"name": "Spicy tomato sauce",
// 		"category": "sauces",
// 		"description": "Hot option of tomato sauce",
// 		"price": 2,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "36",
// 		"name": "Mozarella",
// 		"category": "cheeses",
// 		"description": "100% italian mozarella",
// 		"price": 4,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "37",
// 		"name": "Gorgonzola",
// 		"category": "cheeses",
// 		"description": "Famous blue cheese",
// 		"price": 5,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "38",
// 		"name": "Vegan feta",
// 		"category": "cheeses",
// 		"description": "Delicious feta for vegans",
// 		"price": 4,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "39",
// 		"name": "Chedder",
// 		"category": "cheeses",
// 		"description": "Classic chedder",
// 		"price": 5,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "40",
// 		"name": "Parmezan",
// 		"category": "cheeses",
// 		"description": "24-month old true italian Parmezan",
// 		"price": 7,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "11",
// 		"name": "Cherry tomatoes",
// 		"category": "vegetables",
// 		"description": "Fresh cherry tomatoes",
// 		"price": 3,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "12",
// 		"name": "Sweet corn",
// 		"category": "vegetables",
// 		"description": "Sweet corn",
// 		"price": 2,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "13",
// 		"name": "Pear",
// 		"category": "vegetables",
// 		"description": "Sweet juicy pear",
// 		"price": 3,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "14",
// 		"name": "Onion",
// 		"category": "vegetables",
// 		"description": "Picant onion",
// 		"price": 2,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "15",
// 		"name": "Broccoli",
// 		"category": "vegetables",
// 		"description": "Green healthy broccoli",
// 		"price": 3,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "16",
// 		"name": "Mushrooms",
// 		"category": "vegetables",
// 		"description": "Olive oil fried mushrooms",
// 		"price": 4,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "17",
// 		"name": "Sweet pepper",
// 		"category": "vegetables",
// 		"description": "Juicy pepper",
// 		"price": 3,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "18",
// 		"name": "Olives",
// 		"category": "vegetables",
// 		"description": "Tasty olives from Spain",
// 		"price": 3,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "19",
// 		"name": "Fresh greenies",
// 		"category": "vegetables",
// 		"description": "We put some fresh greenies on your pizza",
// 		"price": 1,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "20",
// 		"name": "Lemon",
// 		"category": "vegetables",
// 		"description": "A piece of fresh lemon to squize your pizza",
// 		"price": 1,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "21",
// 		"name": "Cooked Salmon",
// 		"category": "fish",
// 		"description": "Best Norvey salmon just for you",
// 		"price": 7,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "22",
// 		"name": "Shrimps",
// 		"category": "fish",
// 		"description": "Tasty shrimps",
// 		"price": 7,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "23",
// 		"name": "Mussels",
// 		"category": "fish",
// 		"description": "From the sea to your pizza",
// 		"price": 6,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "24",
// 		"name": "Tuna",
// 		"category": "fish",
// 		"description": "No canned tuna, only fresh cooked fish",
// 		"price": 8,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "25",
// 		"name": "Smoked salmon",
// 		"category": "fish",
// 		"description": "Slightly salty salmon",
// 		"price": 7,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "26",
// 		"name": "Honey",
// 		"category": "toppings",
// 		"description": "Add sweet flavour to pizza",
// 		"price": 1,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "27",
// 		"name": "Pine nuts",
// 		"category": "toppings",
// 		"description": "Simply amazing little nuts",
// 		"price": 4,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "28",
// 		"name": "Walnuts",
// 		"category": "toppings",
// 		"description": "Packed with nutrients",
// 		"price": 2,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "29",
// 		"name": "Sundried tomatoes",
// 		"category": "toppings",
// 		"description": "Add a kiss of sun to your pizza",
// 		"price": 3,
// 		"imageUrls": []
// 	},
// 	{
// 		"_id": "30",
// 		"name": "Truffle oil",
// 		"category": "toppings",
// 		"description": "Smells amazing",
// 		"price": 4,
// 		"imageUrls": []
// 	},
// ]