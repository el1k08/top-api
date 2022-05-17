import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLavelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class HhData {

	@prop()
	count: number;

	@prop()
	juniorSalary: number;

	@prop()
	middleSalary: number;

	@prop()
	senuorSalary: number;
}

export class TopPageAdvantsge {

	@prop()
	title: string;

	@prop()
	description: string;
}

export interface AuthModel extends Base { }
export class TopPageModel extends TimeStamps {

	@prop({ enum: TopLavelCategory })
	firstCategory: TopLavelCategory;

	@prop()
	secondCategory: string;

	@prop({ unique: true })
	alias: string

	@prop()
	title: string;

	@prop()
	category: string;

	@prop({ type: () => HhData })
	hh?: HhData;

	@prop({ type: () => [TopPageAdvantsge] })
	advantsges: TopPageAdvantsge[];

	@prop()
	seoText: string;

	@prop()
	tagsTitle: string;

	@prop({ type: () => [String] })
	tags: string[];
}
