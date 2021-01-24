import { Field, InputType } from 'type-graphql';

@InputType()
export default class CategoryInput {
    @Field()
    description: String;
    @Field()
    name: String;
}