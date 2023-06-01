import { IPizza } from "../types/pizzaInterface";

export const STUB_PIZZAS_SEARCH: IPizza[] = [
	{
		"_id": "1",
		"name": "Blue Pear",
		"description": "This is pure pleasure. The combination of salty blue cheese with sweet pear and honey is absolutely amazing!",
		"ingredients": [
			"pear",
			"gorgonzola",
			"mozarella",
			"walnuts",
			"honey",
			"ruccola"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 20,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 25,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 30,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://threebigbites.com/wp-content/uploads/2020/04/FoodPizzaBlueCheesePear.jpg"
		]
	},
	{
		"_id": "2",
		"name": "Porcini paradize",
		"description": "Porcini mushrooms are legal, but you'll fly away of pleasure after the slice of this pizza",
		"ingredients": [
			"porcini mushrooms",
			"white cream sauce",
			"mozarella",
			"parmesan",
			"parsley"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 20,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 25,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 30,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://images.ctfassets.net/nw5k25xfqsik/3ihbMm1EG8TIK9H8eCryy7/4f27af2d62f23c77f5c69d4245a36958/Porcini-0153-1200x800-5b2df79_1.jpg?w=1024"
		]
	},
	{
		"_id": "3",
		"name": "Smells like Mediteranean",
		"description": "If you think that pizza with fish is ugly, we'll convinse that you're wrong",
		"ingredients": [
			"salmon",
			"philadelphia sauce",
			"green olives",
			"mozarella",
			"parsley"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 23,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 28,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 37,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://cdn.shopify.com/s/files/1/0624/9853/articles/salmonpizzalandscape.jpg?crop=center&height=727&v=1584995787&width=1200"
		]
	},
	{
		"_id": "4",
		"name": "Truffle luxury",
		"description": "Fall in love with the smell of this pizza!",
		"ingredients": [
			"truffles",
			"truffle oil",
			"caramelized onion",
			"mascarpone cheese",
			"parmezan",
			"ruccola",
			"honey"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 25,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 32,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 40,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://www.beyondtheacorn.net/wp-content/uploads/images/2022-03-01/5p1-2048x1366.jpg"
		]
	},
	{
		"_id": "5",
		"name": "Vegan Dream",
		"description": "Doesn't have nothing similar with your grandma's cabbage pie",
		"ingredients": [
			"sweet corn",
			"broccoli",
			"red onion",
			"cherry tomatoes",
			"sun dried tomatoes",
			"basil",
			"cashew sauce"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 15,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 20,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 25,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://cdn.loveandlemons.com/wp-content/uploads/2018/09/vegan-pizza.jpg"
		]
	},
	{
		"_id": "6",
		"name": "Italian Vibes",
		"description": "Italy smells like fresh dough, mozarella cheese and pesto",
		"ingredients": [
			"tomatoes",
			"mozarella",
			"pine nuts",
			"basil",
			"pesto sauce"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 18,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 22,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 28,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://cdn.tasteatlas.com/images/recipes/dc9f05dfe406400fa162620536da3c70.jpg"
		]
	},
	{
		"_id": "7",
		"name": "Vivid green",
		"description": "This is a proof that pizza is not a junk food",
		"ingredients": [
			"zuccini",
			"mozarella",
			"pine nuts",
			"basil",
			"artichokes",
			"lemon zest",
			"olive oil"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 21,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 26,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 32,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://www.sainsburysmagazine.co.uk/uploads/media/720x770/05/4495-Courgette-pizza-1120.jpg?v=1-0"
		]
	},
	{
		"_id": "8",
		"name": "Beach vacations",
		"description": "This seafood pizza makes you remember the taste of your summer near the ocean",
		"ingredients": [
			"shrimps",
			"mussels",
			"octopus",
			"tomato sauce",
			"garlic",
			"mozarella"
		],
		"sizes": [
			{
				"size": "standard",
				"price": 25,
				"weight": 700,
			},
			{
				"size": "large",
				"price": 30,
				"weight": 1000,
			},
			{
				"size": "extralarge",
				"price": 40,
				"weight": 1500,
			}
		],
		"imageUrls": [
			"https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Seafood-Pizza-with-Shrimp-Clam-and-Mussels.webp"
		]
	}
]