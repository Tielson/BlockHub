import { Module } from '@nestjs/common';
import { ContributorsService } from './contributors.service';
import { ContributorsController } from './contributors.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContributorsController],
  providers: [ContributorsService, PrismaService],
})
export class ContributorsModule {}
