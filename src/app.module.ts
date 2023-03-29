import { AppResolver } from './app.resolver';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from 'nestjs-prisma';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { NutritionalIngredientsModule } from './modules/nutritional-ingredients/nutritional-ingredients.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      introspection: true,
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          embed: true,
        }),
      ],
    }),

    PrismaModule.forRoot({
      isGlobal: true,
    }),

    UserModule,

    NutritionalIngredientsModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
