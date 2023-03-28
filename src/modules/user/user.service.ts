import { Injectable } from '@nestjs/common';
import { CreateOneUserArgs } from '../../@generated/user/create-one-user.args';
import { FindManyUserArgs } from '../../@generated/user/find-many-user.args';
import { PrismaService } from '../../prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserInput: CreateOneUserArgs) {
    return await this.prisma.user.create(createUserInput);
  }

  async findAll(args: FindManyUserArgs) {
    return await this.prisma.user.findMany({
      ...args,
      include: {
        posts: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
