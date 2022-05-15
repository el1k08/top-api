export class ProductModel {
	_id: string;
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
