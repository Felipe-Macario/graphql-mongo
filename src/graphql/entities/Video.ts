import { Field, ObjectType } from 'type-graphql';
import Category from './Category';

@ObjectType()
export default class Video {
    @Field()
    name: string;
    @Field()
    description: string;
    @Field()
    category: Category;
    @Field()
    _id: string;
}