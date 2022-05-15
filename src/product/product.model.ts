export class ProductModel {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	colculatedRating: number;
	description: string;
	advantaged: string;
	disAdvantages: string;
	categories: string[];
	tags: string;
	characteristics: {
		[key: string]: string;
	}
}
