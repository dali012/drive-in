import { AuthModule } from '@/auth/auth.module';
import { Module } from '@nestjs/common';
import { VerificationController } from './verification.controller';

@Module({
  imports: [AuthModule],
  controllers: [VerificationController],
})
export class VerficationModule {}
