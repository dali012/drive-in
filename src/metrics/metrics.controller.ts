import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Metrics')
@Controller('metrics')
export class MetricsController {
  @Get()
  @ApiOperation({ summary: 'Retrieve Prometheus metrics for the application' })
  @ApiOkResponse({
    description: 'Returns metrics in Prometheus format',
    content: {
      'text/plain': {
        example: `
            # HELP http_request_duration_seconds The HTTP request latency in seconds
            # TYPE http_request_duration_seconds histogram
            http_request_duration_seconds_bucket{le="0.003"} 10
            http_request_duration_seconds_bucket{le="0.03"} 30
            http_request_duration_seconds_bucket{le="0.1"} 50
            http_request_duration_seconds_sum 5.123
            http_request_duration_seconds_count 100
            # HELP process_cpu_seconds_total Total user and system CPU time spent in seconds
            # TYPE process_cpu_seconds_total counter
            process_cpu_seconds_total 4.5
`,
      },
    },
  })
  getMetrics() {}
}
