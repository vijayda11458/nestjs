import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn,ManyToOne,OneToMany, TableForeignKey, Relation} from "typeorm";
import { System } from "./system.entity";


@Entity()
export class Clause{
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
    SYSTEMID:number;
    @ManyToOne(type=>System,system =>system.SYSTEMID)
    @JoinColumn({ name: "CSYSTEMID", referencedColumnName: 'SYSTEMID'})
    sytem:System;
    
  
}
