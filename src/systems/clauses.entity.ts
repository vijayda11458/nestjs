import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn,ManyToOne,OneToMany, TableForeignKey, Relation, BaseEntity} from "typeorm";
import { System1 } from "./system.entity";
import { TasksModule } from "./system.module";


@Entity()
export class Clause1 extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    CLAUSE_ID:number;
    @Column()
    CLAUSE_NUMBER:number;
    @Column()
    CLAUSE_DESCRIPTION:string;
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
    @Column()
    CLAUSE_TITLE:string;
    @Column({type:'int',nullable: true})
    CSYSTEMID:number;
    @ManyToOne(()=>System1,(system:System1 )=>system.clauses)
    @JoinColumn({name:"CSYSTEMID"})
        system:Promise<Clause1>;
    
  
}
