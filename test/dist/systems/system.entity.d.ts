import { Clause } from "./clauses.entity";
export declare class System {
    SYSTEMID: number;
    SYSTEMNAME: string;
    SYSTEMDESCRIPTION: string;
    STATUS: string;
    CREATE_TIMESTAMP: Date;
    CREATE_USER: string;
    updated_at: Date;
    UPDATE_USER: string;
    clause: Clause[];
}
