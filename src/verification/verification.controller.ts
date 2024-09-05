import { AuthService } from '@/auth/auth.service';
import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller('verification')
export class VerificationController {
  constructor(private readonly authService: AuthService) {}

  @Get('confirm-email')
  @Render('verification-success')
  async confirmEmail(@Query('hash') hash: string): Promise<void> {
    return this.authService.confirmEmail(hash);
  }
}
