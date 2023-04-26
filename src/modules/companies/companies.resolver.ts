import { Query, Resolver } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { CompaniesOutput } from './output/companies.output';

@Resolver()
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Query(() => [CompaniesOutput])
  async getCompaniesData() {
    return await this.companiesService.getCompaniesData();
  }
}
