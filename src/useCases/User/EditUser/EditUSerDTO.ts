export interface IEditUserRequestDTO{
  id: string;
  column: string;
  value: string;
}

export interface IEditUserAffectedRows{
  affectedRows: number;
}