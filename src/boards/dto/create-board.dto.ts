class BoardColum {
  title: string;
  order: number;
}

export class CreateBoardDto {
  readonly title: string;
  readonly columns: BoardColum[];
}
