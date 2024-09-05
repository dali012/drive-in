import { FilesModule } from '@/files/files.module';
import { Module } from '@nestjs/common';
import { PersistenceModule } from './infrastructure/persistence/persistence.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PersistenceModule, FilesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [PersistenceModule, UsersService],
})
export class UsersModule {}
