import { Module } from '@nestjs/common';
import { TasksModule } from './systems/system.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TasksModule,
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'VIJAYsha-2',
    database:'processridge',
    autoLoadEntities:true,
    synchronize:true,
  })],

})
export class AppModule {}
