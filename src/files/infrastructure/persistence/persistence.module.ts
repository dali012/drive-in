import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { FileRepository } from './file.repository';
import { FilesRespository } from './repositories/file.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [
    {
      provide: FileRepository,
      useClass: FilesRespository,
    },
  ],
  exports: [FileRepository],
})
export class PersistenceModule {}
