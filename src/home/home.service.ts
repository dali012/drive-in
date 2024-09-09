import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';

@Injectable()
export class HomeService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  appInfo() {
    return {
      name: this.configService.get('app.name', { infer: true }),
      version: '1.0.0',
      prefix: this.configService.get('app.apiPrefix', { infer: true }),
      description:
        'Carpooling App API project! This API is built using NestJS, Supabse(db + storage), and TypeORM, providing a robust backend solution for managing carpooling services.',
      author: 'Dali012',
      environment:
        this.configService.get('app.nodeEnv', { infer: true }) || 'development',
    };
  }
}
