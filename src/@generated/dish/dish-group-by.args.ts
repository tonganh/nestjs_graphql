import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishWhereInput } from './dish-where.input';
import { Type } from 'class-transformer';
import { DishOrderByWithAggregationInput } from './dish-order-by-with-aggregation.input';
import { DishScalarFieldEnum } from './dish-scalar-field.enum';
import { DishScalarWhereWithAggregatesInput } from './dish-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DishCountAggregateInput } from './dish-count-aggregate.input';
import { DishAvgAggregateInput } from './dish-avg-aggregate.input';
import { DishSumAggregateInput } from './dish-sum-aggregate.input';
import { DishMinAggregateInput } from './dish-min-aggregate.input';
import { DishMaxAggregateInput } from './dish-max-aggregate.input';

@ArgsType()
export class DishGroupByArgs {

    @Field(() => DishWhereInput, {nullable:true})
    @Type(() => DishWhereInput)
    where?: DishWhereInput;

    @Field(() => [DishOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DishOrderByWithAggregationInput>;

    @Field(() => [DishScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DishScalarFieldEnum>;

    @Field(() => DishScalarWhereWithAggregatesInput, {nullable:true})
    having?: DishScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DishCountAggregateInput, {nullable:true})
    _count?: DishCountAggregateInput;

    @Field(() => DishAvgAggregateInput, {nullable:true})
    _avg?: DishAvgAggregateInput;

    @Field(() => DishSumAggregateInput, {nullable:true})
    _sum?: DishSumAggregateInput;

    @Field(() => DishMinAggregateInput, {nullable:true})
    _min?: DishMinAggregateInput;

    @Field(() => DishMaxAggregateInput, {nullable:true})
    _max?: DishMaxAggregateInput;
}
