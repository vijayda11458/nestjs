import {IsNotEmpty} from 'class-validator'

export class CreateTaskDto{
    @IsNotEmpty()
    SYSTEMNAME:string;
    @IsNotEmpty()
    SYSTEMDESCRIPTION:string;
    @IsNotEmpty()
    STATUS:string;
    @IsNotEmpty()
    CREATE_USER:string;
    @IsNotEmpty()
    UPDATE_USER:string;
}

export class ClauseDto{
    @IsNotEmpty()
    CLAUSE_NUMBER:number;
    @IsNotEmpty()
    CLAUSE_DESCRIPTION:string;
    @IsNotEmpty()
    STATUS:number;
    @IsNotEmpty()
    CREATE_USER:string;
    @IsNotEmpty()
    UPDATE_USER:string;
    @IsNotEmpty()
    CLAUSE_TITLE:string;
    // @IsNotEmpty()
    // CSYSTEMID:string;
    // @IsNotEmpty()
    // CLAUSE_SYSTEMID:number;
}