import { FileDto } from '@/files/dto/file.dto';
import { lowerCaseTransformer } from '@/utils/transformers/lower-case.transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class AuthUpdateDto {
  @ApiPropertyOptional({ type: () => FileDto })
  @IsOptional()
  photo?: FileDto | null;

  @ApiPropertyOptional({ example: 'John Doe' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  name?: string;

  @ApiPropertyOptional({ example: 'I am John' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  bio?: string;

  @ApiPropertyOptional({ example: '+123456789' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  phoneNumber?: string;

  @ApiPropertyOptional({ example: 'USA' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  region?: string;

  @ApiPropertyOptional({ example: 'new.email@example.com' })
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @Transform(lowerCaseTransformer)
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  oldPassword?: string;
}
