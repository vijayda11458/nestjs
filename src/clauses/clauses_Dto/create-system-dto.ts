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