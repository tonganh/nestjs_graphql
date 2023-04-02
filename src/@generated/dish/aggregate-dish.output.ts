import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DishCountAggregate } from './dish-count-aggregate.output';
import { DishAvgAggregate } from './dish-avg-aggregate.output';
import { DishSumAggregate } from './dish-sum-aggregate.output';
import { DishMinAggregate } from './dish-min-aggregate.output';
import { DishMaxAggregate } from './dish-max-aggregate.output';

@ObjectType()
export class AggregateDish {

    @Field(() => DishCountAggregate, {nullable:true})
    _count?: DishCountAggregate;

    @Field(() => DishAvgAggregate, {nullable:true})
    _avg?: DishAvgAggregate;

    @Field(() => DishSumAggregate, {nullable:true})
    _sum?: DishSumAggregate;

    @Field(() => DishMinAggregate, {nullable:true})
    _min?: DishMinAggregate;

    @Field(() => DishMaxAggregate, {nullable:true})
    _max?: DishMaxAggregate;
}
