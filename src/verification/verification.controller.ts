import { AuthService } from '@/auth/auth.service';
import { Controller, Get, Query, Render } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('verification')
export class VerificationController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary:
      'Auto Confirm user email with verification link (Do not use it runs automatically)',
  })
  @ApiQuery({
    name: 'hash',
    required: true,
    description: 'Hash for email confirmation',
  })
  @ApiOkResponse({ description: 'Email confirmed successfully' })
  @Get('confirm-email')
  @Render('verification-success')
  async confirmEmail(@Query('hash') hash: string): Promise<void> {
    return this.authService.confirmEmail(hash);
  }
}
