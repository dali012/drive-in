import { FileType } from '@/files/domain/file';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Status } from 'src/statuses/domain/status';

export class User {
  @ApiProperty({
    type: Number,
  })
  id: number;

  @ApiProperty({
    type: String,
    example: 'john.doe@example.com',
  })
  @Expose()
  email: string | null;

  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  @ApiProperty({
    type: String,
    example: 'email',
  })
  @Expose()
  provider: string;

  @ApiProperty({
    type: String,
    example: '1234567890',
  })
  @Expose()
  socialId?: string | null;

  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    type: () => FileType,
  })
  photo?: FileType | null;

  @ApiProperty({
    type: String,
    example: 'bio text',
  })
  @Expose()
  bio?: string | null;

  @ApiProperty({
    type: String,
    example: 'us',
  })
  @Expose()
  region?: string | null;

  @ApiProperty({
    type: String,
    example: '+1234567890',
  })
  @Expose()
  phoneNumber?: string | null;

  @ApiProperty({
    type: () => Status,
  })
  status?: Status;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}
