import { Module } from '@nestjs/common';
import { ContributorsModule } from './contributors/contributors.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ContributorsModule, ProjectsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
