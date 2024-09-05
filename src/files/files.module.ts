import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { PersistenceModule } from './infrastructure/persistence/persistence.module';
import { FilesS3Module } from './infrastructure/uploader/s3/files.module';

@Module({
  imports: [PersistenceModule, FilesS3Module],
  providers: [FilesService],
  exports: [FilesService, PersistenceModule],
})
export class FilesModule {}
