import { lastValueFrom, map, catchError } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class HttpDataService {
  constructor(private readonly httpService: HttpService) {}

  async getData(url: string) {
    return lastValueFrom(
      this.httpService
        .get(url)
        .pipe(
          map((res) => {
            return res.data;
          }),
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException('API not available');
          }),
        ),
    );
  }
}
