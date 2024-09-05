import { StatusEnum } from '@/statuses/statuses.enum';
import { UserEntity } from '@/users/infrastructure/persistence/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'argon2';
import { Repository } from 'typeorm';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (!count) {
      const password = await hash('secret');
      await this.repository.save(
        this.repository.create({
          name: 'Super Admin',
          email: 'admin@example.com',
          password,
          status: {
            id: StatusEnum.active,
            name: 'Active',
          },
        }),
      );
      await this.repository.save(
        this.repository.create({
          name: 'John Doe',
          email: 'john.doe@example.com',
          password,
          status: {
            id: StatusEnum.active,
            name: 'Active',
          },
        }),
      );
    }
  }
}
