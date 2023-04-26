import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { HttpDataModule } from '../http-data/http-data.module';

@Module({
  imports: [HttpDataModule],
  providers: [CompaniesResolver, CompaniesService],
})
export class CompaniesModule {}
