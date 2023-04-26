import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CompaniesOutput {
  @Field(() => Float, { nullable: true })
  cost?: number;

  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  createdAt?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  parentId?: string;

  @Field(() => [CompaniesOutput!], { nullable: true, defaultValue: [] })
  children?: CompaniesOutput[];
}
