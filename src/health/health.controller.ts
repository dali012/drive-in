import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
  ) {}

  @ApiOperation({
    summary: 'Check the health of the API and database services',
  })
  @ApiOkResponse({ description: 'Health check performed successfully' })
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck('DriveIn API Docs', 'https://dali012.eu.org/docs'),
      () => this.db.pingCheck('Supabase Postgres'),
    ]);
  }
}
