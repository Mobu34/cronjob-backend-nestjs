import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailModule } from '../email/email.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ScheduleModule.forRoot(), EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
