import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { Allow } from 'class-validator';
import { FileConfig } from '../config/file-config.type';
import fileConfig from '../config/file.config';

export class FileType {
  @ApiProperty({
    type: String,
    example: 'cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae',
  })
  @Allow()
  id: string;

  @ApiProperty({
    type: String,
    example: 'https://example.com/path/to/file.jpg',
  })
  @Transform(
    ({ value }) => {
      const s3 = new S3Client({
        region: (fileConfig() as FileConfig).awsS3Region ?? '',
        endpoint: (fileConfig() as FileConfig).awsS3Endpoint ?? '',
        forcePathStyle: true,
        credentials: {
          accessKeyId: (fileConfig() as FileConfig).accessKeyId ?? '',
          secretAccessKey: (fileConfig() as FileConfig).secretAccessKey ?? '',
        },
      });

      const command = new GetObjectCommand({
        Bucket: (fileConfig() as FileConfig).awsDefaultS3Bucket ?? '',
        Key: value,
      });

      return getSignedUrl(s3, command, { expiresIn: 3600 });
    },
    { toPlainOnly: true },
  )
  path: string;
}
