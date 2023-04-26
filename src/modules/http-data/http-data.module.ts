import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpDataService } from './http-data.service';

@Module({
  providers: [HttpDataService],
  imports: [HttpModule],
  exports: [HttpDataService],
})
export class HttpDataModule {}
