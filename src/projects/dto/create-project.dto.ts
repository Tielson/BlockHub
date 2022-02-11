export class CreateProjectDto {
  description: string;
  name: string;
  startDate: Date;
  endDate: Date;
  active: boolean;
  contributor_id: number;
}
