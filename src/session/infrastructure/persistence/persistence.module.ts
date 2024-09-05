import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './entities/session.entity';
import { SessionsRepository } from './repositories/session.repository';
import { SessionRepository } from './session.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  providers: [
    {
      provide: SessionRepository,
      useClass: SessionsRepository,
    },
  ],
  exports: [SessionRepository],
})
export class PersistenceModule {}
