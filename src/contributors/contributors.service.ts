import { Injectable } from '@nestjs/common';
import { CreateContributorDto } from './dto/create-contributor.dto';
import { UpdateContributorDto } from './dto/update-contributor.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ContributorsService {
  constructor(private prisma: PrismaService) {}
  async create(createContributorDto: CreateContributorDto) {
    const contributor = await this.prisma.contributor.create({
      data: createContributorDto,
    });

    return contributor;
  }

  async findAll() {
    const contributors = await this.prisma.contributor.findMany();
    return contributors;
  }

  async findOne(id: number) {
    const contributor = await this.prisma.contributor.findUnique({
      where: { id },
    });
    return contributor;
  }

  async update(id: number, updateContributorDto: UpdateContributorDto) {
    const contributor = await this.prisma.contributor.update({
      where: { id },
      data: updateContributorDto,
    });
    return contributor;
  }

  async remove(id: number) {
    const contributor = await this.prisma.contributor.delete({
      where: { id },
    });
    return contributor;
  }
}
