import { FileDto } from '@/files/dto/file.dto';
import { lowerCaseTransformer } from '@/utils/transformers/lower-case.transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { StatusDto } from 'src/statuses/dto/status.dto';

export class CreateUserDto {
  @ApiProperty({ example: 'test1@example.com', type: String })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsEmail()
  email: string | null;

  @ApiProperty()
  @MinLength(6)
  password?: string;

  provider?: string;

  socialId?: string | null;

  @ApiProperty({ example: 'John Doe', type: String })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Bio', type: String })
  @IsString()
  @IsOptional()
  bio?: string | null;

  @ApiPropertyOptional({ type: () => FileDto })
  @IsOptional()
  photo?: FileDto | null;

  @ApiProperty({ example: '+48 123 456 789', type: String })
  @IsString()
  @IsOptional()
  phoneNumber?: string | null;

  @ApiProperty({ example: 'US', type: String })
  @IsString()
  @IsOptional()
  region?: string | null;

  @ApiPropertyOptional({ type: StatusDto })
  @IsOptional()
  @Type(() => StatusDto)
  status?: StatusDto;

  hash?: string | null;
}
