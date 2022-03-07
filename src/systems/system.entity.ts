import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn,ManyToOne,OneToMany, TableForeignKey} from "typeorm";
import { Clause } from "./clauses.entity";
@Entity()
export class System{
    @PrimaryGeneratedColumn('increment')
    SYSTEMID:number;
    @Column()
    SYSTEMNAME:string;
    @Column()
    SYSTEMDESCRIPTION:string;
    @Column()
    STATUS:string;
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    CREATE_TIMESTAMP:Date;
    @Column()
    CREATE_USER:string;
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    @Column()
    UPDATE_USER:string;

    @OneToMany(type=>Clause,clause=>clause.sytem,{
        cascade:true
    })
    clause:Clause[];
   
}


