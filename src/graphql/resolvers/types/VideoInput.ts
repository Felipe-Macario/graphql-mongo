import { Field, InputType } from "type-graphql";

@InputType()
export default class VideoInput {
    @Field()
    description: String;
    @Field()
    name: String;
    @Field()
    category: String;
}