export enum TopLavelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class TopPageModel {
	firstCategory: TopLavelCategory;
	secondCategory: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorSalary: number;
		middleSalary: number;
		senuorSalary: number;
	}
	advantsges: {
		title: string;
		description: string;
	}[]
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
