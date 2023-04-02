import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaWhereInput } from './dish-materia-where.input';
import { Type } from 'class-transformer';
import { DishMateriaOrderByWithAggregationInput } from './dish-materia-order-by-with-aggregation.input';
import { DishMateriaScalarFieldEnum } from './dish-materia-scalar-field.enum';
import { DishMateriaScalarWhereWithAggregatesInput } from './dish-materia-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DishMateriaCountAggregateInput } from './dish-materia-count-aggregate.input';
import { DishMateriaAvgAggregateInput } from './dish-materia-avg-aggregate.input';
import { DishMateriaSumAggregateInput } from './dish-materia-sum-aggregate.input';
import { DishMateriaMinAggregateInput } from './dish-materia-min-aggregate.input';
import { DishMateriaMaxAggregateInput } from './dish-materia-max-aggregate.input';

@ArgsType()
export class DishMateriaGroupByArgs {

    @Field(() => DishMateriaWhereInput, {nullable:true})
    @Type(() => DishMateriaWhereInput)
    where?: DishMateriaWhereInput;

    @Field(() => [DishMateriaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DishMateriaOrderByWithAggregationInput>;

    @Field(() => [DishMateriaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DishMateriaScalarFieldEnum>;

    @Field(() => DishMateriaScalarWhereWithAggregatesInput, {nullable:true})
    having?: DishMateriaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DishMateriaCountAggregateInput, {nullable:true})
    _count?: DishMateriaCountAggregateInput;

    @Field(() => DishMateriaAvgAggregateInput, {nullable:true})
    _avg?: DishMateriaAvgAggregateInput;

    @Field(() => DishMateriaSumAggregateInput, {nullable:true})
    _sum?: DishMateriaSumAggregateInput;

    @Field(() => DishMateriaMinAggregateInput, {nullable:true})
    _min?: DishMateriaMinAggregateInput;

    @Field(() => DishMateriaMaxAggregateInput, {nullable:true})
    _max?: DishMateriaMaxAggregateInput;
}
