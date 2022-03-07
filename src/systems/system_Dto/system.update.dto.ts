export class UpdateSystemDto {
    readonly SYSTEMNAME: string;
    readonly STATUS: string;
    readonly SYSTEMDESCRIPTION: string;
    readonly  UPDATE_USER:string;
}

export class UpdateClauseDto{
readonly CLAUSE_NUMBER:number;
readonly CLAUSE_DESCRIPTION:string;
readonly SYSTEM_ID:number;
readonly STATUS:string;
readonly CREATE_USER:string;
readonly UPDATE_USER:string;
readonly CLAUSE_TITLE:string;
}