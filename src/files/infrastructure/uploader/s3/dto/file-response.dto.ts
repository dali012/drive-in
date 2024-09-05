import { FileType } from '@/files/domain/file';
import { ApiProperty } from '@nestjs/swagger';

export class FileResponseDto {
  @ApiProperty({
    type: () => FileType,
  })
  file: FileType;
}
