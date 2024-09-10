import { FileEntity } from '@/files/infrastructure/persistence/entities/file.entity';
import { EntityHelper } from '@/utils/entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { AuthProvidersEnum } from 'src/auth/auth-providers.enum';
import { StatusEntity } from 'src/statuses/infrastructure/persistence/entities/status.entity';
import {
  AfterLoad,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'user',
})
@Index(['socialId', 'email', 'id'], { unique: true })
export class UserEntity extends EntityHelper {
  @ApiProperty({
    type: Number,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: String,
    example: 'john.doe@example.com',
  })
  @Column({ type: String, unique: true, nullable: true })
  @Expose()
  email: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  public previousPassword?: string;

  @AfterLoad()
  public loadPreviousPassword(): void {
    this.previousPassword = this.password;
  }

  @ApiProperty({
    type: String,
    example: 'email',
  })
  @Column({ default: AuthProvidersEnum.email })
  @Expose()
  provider: string;

  @ApiProperty({
    type: String,
    example: '1234567890',
  })
  @Column({ type: String, nullable: true })
  @Expose()
  socialId?: string | null;

  @ApiProperty({
    type: String,
    example: 'John',
  })
  @Column({ type: String })
  name: string;

  @ApiProperty({
    type: () => StatusEntity,
  })
  @ManyToOne(() => StatusEntity, {
    eager: true,
    cascade: true
  })
  status?: StatusEntity;

  @ApiProperty({
    type: () => FileEntity,
  })
  @OneToOne(() => FileEntity, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  photo?: FileEntity | null;

  @ApiProperty({
    type: String,
    example: 'bio text',
  })
  @Column({ type: String, nullable: true })
  bio?: string | null;

  @ApiProperty({
    type: String,
    example: 'us',
  })
  @Column({ type: String, nullable: true })
  region?: string | null;

  @ApiProperty({
    type: String,
    example: '+1234567890',
  })
  @Column({ type: String, nullable: true })
  phoneNumber?: string | null;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn()
  deletedAt: Date;
}
