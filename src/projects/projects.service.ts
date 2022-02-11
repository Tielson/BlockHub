import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}
  async create(createProjectDto: CreateProjectDto) {
    const project = await this.prisma.project.create({
      data: createProjectDto,
    });

    return project;
  }

  async findAll() {
    const project = await this.prisma.project.findMany();
    return project;
  }

  async findOne(id: number) {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
    return project;
  }

  async remove(id: number) {
    const project = await this.prisma.project.delete({
      where: { id },
    });
    return project;
  }
}
