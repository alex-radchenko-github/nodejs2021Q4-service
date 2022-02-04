export class CreateTaskDto {
  readonly title: string;
  readonly order: number;
  readonly description: string;
  readonly userId: string;
  readonly boardId: string;
  readonly columnId: string;
}
