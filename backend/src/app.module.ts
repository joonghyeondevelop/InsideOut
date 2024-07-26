import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { QnAModule } from './qn-a/qn-a.module';
import { CommentModule } from './comment/comment.module';
import { CcommentModule } from './ccomment/ccomment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      username: "root",
      password: "dlalsgur12",
      host: "127.0.0.1",
      database: "insideout",
      autoLoadModels: true,
      synchronize: true, // 애플리케이션 실행 했을 때 데이터베이스랑 동기화를 할 것인지 ?
      sync: { force: false } // true 시 초기화
    }),
    QnAModule, CommentModule, CcommentModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }