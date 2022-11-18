import { Module } from '@nestjs/common';
import { CronjobService } from 'src/cronjob/cronjob.service';
import { EmailController } from './email.controller';

@Module({
  //   imports: [CronjobService],
  controllers: [EmailController],
  providers: [CronjobService],
})
export class EmailModule {}
