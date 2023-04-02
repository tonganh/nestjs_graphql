import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { NutritionalIngredientsMaterialListRelationFilter } from '../nutritional-ingredients-material/nutritional-ingredients-material-list-relation-filter.input';
import { DishMateriaListRelationFilter } from '../dish-materia/dish-materia-list-relation-filter.input';

@InputType()
export class MaterialWhereInput {

    @Field(() => [MaterialWhereInput], {nullable:true})
    AND?: Array<MaterialWhereInput>;

    @Field(() => [MaterialWhereInput], {nullable:true})
    OR?: Array<MaterialWhereInput>;

    @Field(() => [MaterialWhereInput], {nullable:true})
    NOT?: Array<MaterialWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imgUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => NutritionalIngredientsMaterialListRelationFilter, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialListRelationFilter;

    @Field(() => DishMateriaListRelationFilter, {nullable:true})
    DishMateria?: DishMateriaListRelationFilter;
}
