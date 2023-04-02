import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DishMateriaCountAggregate } from './dish-materia-count-aggregate.output';
import { DishMateriaAvgAggregate } from './dish-materia-avg-aggregate.output';
import { DishMateriaSumAggregate } from './dish-materia-sum-aggregate.output';
import { DishMateriaMinAggregate } from './dish-materia-min-aggregate.output';
import { DishMateriaMaxAggregate } from './dish-materia-max-aggregate.output';

@ObjectType()
export class AggregateDishMateria {

    @Field(() => DishMateriaCountAggregate, {nullable:true})
    _count?: DishMateriaCountAggregate;

    @Field(() => DishMateriaAvgAggregate, {nullable:true})
    _avg?: DishMateriaAvgAggregate;

    @Field(() => DishMateriaSumAggregate, {nullable:true})
    _sum?: DishMateriaSumAggregate;

    @Field(() => DishMateriaMinAggregate, {nullable:true})
    _min?: DishMateriaMinAggregate;

    @Field(() => DishMateriaMaxAggregate, {nullable:true})
    _max?: DishMateriaMaxAggregate;
}
